function concat_url(base, path){
    return base + '/' + path;
}

var getVod = async function(){
    const list_vod_api = 'bv/cms/v1/vods';
    const url = concat_url(api_base_url, list_vod_api);
    const queryParams = { current_page: 1, items_per_page: 1};
    const urlWithParams = new URL(url);
    urlWithParams.search = new URLSearchParams(queryParams).toString();
    const options = {
      method: 'GET',
      headers: {
        'x-bv-org-id': org_id,
        Accept: 'application/json',
        authorization: api_token
      }
    };
    try {
      const response = await fetch(urlWithParams, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }

    
  }
  
  var getToken = async function(vod_id){
    console.log('{"resource_id":"' + vod_id + '","resource_type":"RESOURCE_TYPE_VOD","customer_id":"","customer_name":""}');
    const get_token_api = 'bv/cms/v1/resources/tokens';
    const resource_type = 'RESOURCE_TYPE_VOD'; // get vod reource
    const url = concat_url(api_base_url, get_token_api);
    const request_body = '{"resource_id":"' + vod_id + '","resource_type":"' + resource_type + '","customer_id":"","customer_name":""}';
    const options = {
      method: 'POST',
      headers: {
        'x-bv-org-id': org_id,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        authorization: api_token
      },
      body: request_body
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }