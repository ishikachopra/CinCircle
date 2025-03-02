import {S3Client,GetObjectCommand} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
    region:"",
    credentials:{
         accessKeyId:"",
         secretKeyId:"",
    },
});

async function getMovie(key){
    const command = new  GetObjectCommand({
        Bucket:"",
        Key:"",
    })
    const url =await getSignedUrl(s3Client,command);
    return url;
}


