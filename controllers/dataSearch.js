var request = require('request');
var dbjson = " ";

const getData = (req, res) => {
    let data = req.body.search;
    console.log(data);
    res.redirect(`/search/${data}`);
    searchData(req, res); 
};


let searchData = async (req, res) => {
    let data = req.params.keyword;
    var clientServerOptions = {
        uri: `https://psbdmp.cc/api/search/domain/${data}`,
        method: "get",
    };

    
    let dbjson = await new Promise((resolve, reject) => {
        request(clientServerOptions, function (error, response) {
            if (error) {
                reject(error);
            } else {
                let dbres = response.body;
                let dbjson = JSON.parse(dbres);
                resolve(dbjson);
            }
        });
    });

    var count = dbjson.count
    var dataid = dbjson.data
    
    console.log(dataid);
    let idList = [];
    for (let i = 0; i < count; i++) {
        
        idList.push(dataid[i]["text"])
        idList.push("https://pastebin.com/"+dataid[i]["id"]);
        
       
        
    }    
    
    let info = {
        search: `${data}`,
        count: `${count}`,
        id:idList,
        
    };
    
    res.json({info});
    

    
};

module.exports = {
    getData,
    searchData
};



///