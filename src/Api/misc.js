import {Storage} from 'aws-amplify';
export const getFromStorage = body => {
  Storage.get(body.key, {level: body.level})
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });
};
