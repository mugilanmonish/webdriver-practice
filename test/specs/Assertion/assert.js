import { assert, expect } from 'chai';

var a = "Mugilan"
assert.equal(a,"Mugilan","Name is not matching")
assert.typeOf(a,'string')
assert.isNotEmpty(a)
assert.lengthOf(a,7,"Length is not matching")
let arr1 = [1,2,3,5,4,10]
let arr2 = [1,2,3,4,5,10]
assert.sameMembers(arr1,arr2,"Two array is not same")
// assert.
// expect()