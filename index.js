const employee = {
    name: "Grace",
    streetAddress: "345B Soundview Ln"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    var clone = Object.assign({}, object);
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}
