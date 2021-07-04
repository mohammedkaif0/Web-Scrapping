const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const writestream = fs.createWriteStream('projectdetails.csv');
// write header
writestream.write(`title,link,paragraph\n`);

request('https://Blog.mohammedkaif0.repl.co',(error,response,html)=>{
     if(!error&&response.statusCode==200){
         const $ = cheerio.load(html);
         $('.card_content').each((i,el)=>{
             const title = $(el).find('.card_title').text();
             const link = $(el).find('a').attr('href');
             const paragraph=$(el).find('p').text();
             writestream.write(`${title},${link},${paragraph}\n`);
         })
        
     }
     console.log('web Scrapping completed..')
})