const http = require('http')
const fs = require('fs/promises')

const getHtml = async (fileName) => {
    const data = await fs.readFile(`./${fileName}`, { encoding: 'utf8' })
    return data
}


const server = http.createServer(async (req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    
    let currentPageContent

    if(req.url === '/')
    {
        currentPageContent = await getHtml('index.html')
    }
    else if(req.url === '/about')
    {
        currentPageContent = await getHtml('about.html') 
    }
    else if(req.url === '/contact-me')
    {
        currentPageContent = await getHtml('contact-me.html') 
    }
    else
    {
        currentPageContent = await getHtml('404.html')
    }
    
    res.end(currentPageContent)
})

server.listen(8080, () => {
    console.log(`Server running at port 8080`)
})