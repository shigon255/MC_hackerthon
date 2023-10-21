function concat_url(base, path){
    return base + '/' + path;
}

var get_resource = async function(name, resource_type){
  // get resource(vod/live) by it's name
  // name: resource name
  // type: can be either 'RESOURCE_TYPE_VOD' or 'RESOURCE_TYPE_LIVE'
  const type = resource_type == 'RESOURCE_TYPE_VOD' ? 'vods' : 'lives';
  const list_api = 'bv/cms/v1/' + type;
  const list_url = concat_url(api_base_url, list_api);
  const list_queryParams = { current_page: 1, items_per_page: 10};
  const list_url_with_params = new URL(list_url);
  list_url_with_params.search = new URLSearchParams(list_queryParams).toString();    
  const list_options = {
    method: 'GET',
    headers: {
      'x-bv-org-id': org_id,
      Accept: 'application/json',
      authorization: api_token
    }
  };
  try {
    const response = await fetch(list_url_with_params, list_options);
    const data = await response.json();
    // assume that vod has unique name
    const resource = type == 'vods' ? data.vods.find(obj => obj.name == name) : data.lives.find(obj => obj.name == name);
    return resource;
  } catch (error) {
    console.error(error);
  }
}
  
var getToken = async function(resource_id, resource_type){
  // get resource token given resource_id and resource_type
  // resource_id: string, from get_resource().id
  // resource_type: can be either RESOURCE_TYPE_VOD or RESOURCE_TYPE_LIVE, based on the type of your object

  const get_token_api = 'bv/cms/v1/resources/tokens';
  const url = concat_url(api_base_url, get_token_api);
  const request_body = '{"resource_id":"' + resource_id + '","resource_type":"' + resource_type + '","customer_id":"","customer_name":""}';
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
    return data.token;
  } catch (error) {
    console.error(error);
  }
}

var create_live = async function(live_name){
  const create_live_api = 'bv/cms/v1/lives';
  const url = concat_url(api_base_url, create_live_api);
  const request_body = '{"live":{"broadcast_mode":"BROADCAST_MODE_TRADITIONAL_LIVE","name":"' + live_name + '","resolution":"LIVE_RESOLUTION_HD","security":{"privacy":{"type":"SECURITY_PRIVACY_TYPE_PUBLIC"}},"type":"LIVE_TYPE_LIVE"}}'
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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

var start_live = async function(live_id){
  const start_live_api = 'bv/cms/v1/lives/' + live_id + ':start';
  const url = concat_url(api_base_url, start_live_api);
  const options = {
    method: 'POST',
    headers: {
      'x-bv-org-id': org_id,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: api_token
    },
    body: '{}'
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}