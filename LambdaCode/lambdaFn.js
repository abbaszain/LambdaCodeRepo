const aws = require('aws-sdk');
const ec2 = new aws.EC2({apiVersion: '2016-11-15'});

exports.handler = async (event) => {
    let resp;
    ec2.describeAvailabilityZones(params, (err, data) => {
    if (err) {
    console.log("Error", err);
  } else {
    resp = data.AvailabilityZones;
  }
});
    const response = {
        statusCode: 200,
        body: JSON.stringify(resp)
    };
    return response;
};
