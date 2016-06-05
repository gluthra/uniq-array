
// There are two implementations : One with indexOf method and other with set

//
// When Set is not present
//
function noSet(arr) {
	var retArr = [];
	if(arr && arr.length > 0) {
		for(var idx = 0; idx < arr.length; idx++) {
			if(retArr.indexOf(arr[idx]) === -1)
				retArr.push(arr[idx]);
		}
	}

	return retArr;
}

//
// When Set is present
//
function withSet(arr) {
	var retArr = [];
	if(arr && arr.length > 0) {
		var set = new Set();
		retArr = arr.filter(function(ele) {
			if(!set.has(ele)) {
				set.add(ele);
				return true;
			} else{
				return false;
			}
		});
	}

	return retArr;
}


if('Set' in global)
	module.exports = withSet;
else
	module.exports = noSet;
