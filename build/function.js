const api_base_url = 'https://api.one-stage.kkstream.io'
const api_token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmJpdCIsInN1YiI6IjA5OWNjMzc2LWZhMjUtNDk0Yi05ODY2LThkZWUwMDRhNmVkMCIsImp0aSI6IjQxZGJjMzUxLTJlMzgtNDIzYS05OGQ2LTYxNTU3M2ExOTBjOCIsInRva2VuX3VzZSI6ImFwaV9hY2Nlc3MiLCJlbWFpbCI6InJheTUyMzM1MTJAZ21haWwuY29tIn0.oCzn751c5dCxxlJCSEoQyPzB63KkyrPC5dkPjEmLepkjFLotCJE2EnGx2ZvBRmzmK-USKCRIUC6FbNE-axfp-WmgDMidUatY54_74YXA7L4F4k-MbwpYSKaV3N29WVNU7B6gl3IIotKY-wol1gTt7UUT75SRsEUTRPP0Q8aDrlahaZ-BJT0-Q1f_jXWW6ScrLuEjdrRxoe5xJvBnwbOiixSLfjj9rih69-1ytZe_7DBZoGmBIVXk6XvVlwlbByKs2d2CCuzyHHaNKur2ri5A376kuaz23Ng4It8j90Ro9ElR5NvyW2lOwzHHCthHRSl3SlHbLeGb_He5OJ0TZOOzxIpCxASu9Oacb4ShaxD12Ww5svOGGdAqo75aBwQBbsUARrjqd-jQNcJGId4pd4VsVBORyYNPNU8EYaneI2Lwou0jnYUql5gx3G8q02Ydj0cYW2HAIlJJCVEH3Q3m0lP5Ntm4T_ay4uO8jBkqhqcG1vmMVWDrxApEb6UIW4zvslU1b9nEOGQLMk0QyCsKYhSJ27DHDcIBfDlPz1811trOhpzu_dU3y02hIYQHYSVX6KK4jkgyyurkTfTg7LiHLlOT7uO80r8Dhgbh9t_vLyraHZRHSX5gxATK8SR2Sy1ldHtbpx9E6MQGTIZ7E9WQO8zcASaalvuFHxAPsRkI9F5RQ2U'
const org_id = 'e28bfe29-6bd1-425d-ad31-60b59ecd2028'

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
      console.log(data);
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
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }