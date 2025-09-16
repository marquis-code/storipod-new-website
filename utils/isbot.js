import crawlerUserAgents from '../static/crawler-user-agents.json';  // Adjust path as needed

function isBot(userAgent) {
    return crawlerUserAgents.some(agent => {
        const pattern = new RegExp(agent.pattern, 'i');
        return pattern.test(userAgent);
    });
}

export default isBot;