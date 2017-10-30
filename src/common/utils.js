/*
* @Author: xiongsheng
* @Date:   2016-12-21 16:35:20
* @Last Modified by:   xiongsheng
* @Last Modified time: 2017-01-09 15:31:57
*/

import {bizFetch} from '@bizfe/biz-fetch';
const settings = {
    _settings: {
        fetchOpt: {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Sogou-Request-Type': 'XMLHTTPRequest'
            }
        },
        statusCallbacks: {
            401() {
                window.location.reload();
            }
        }
    }
}

function bizFetchPlus(url, params) {
    const options = Object.assign({}, settings, {_params: params});
    return bizFetch(url, options).then( (response) =>{
        if (response.flag) {
            return response;
        } else if (response.flag == false) {
            alert(response.msg);
        }
    })
}

export {bizFetchPlus as bizFetch};
