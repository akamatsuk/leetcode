var defangIPaddr = function(address) {
    const result = address.split('.').join('[.]');
    return result;
};

console.log(defangIPaddr("1.1.1.1"));