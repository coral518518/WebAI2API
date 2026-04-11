import { Camoufox } from 'camoufox-js';

async function main() {
    console.log('Starting Camoufox...');
    const browser = await Camoufox({ headless: false });
    const page = await browser.newPage();
    
    page.on('close', () => console.log('Page closed!'));
    page.on('crash', () => console.log('Page crashed!'));
    
    console.log('Navigating to chatgpt.com...');
    await page.goto('https://chatgpt.com/', { waitUntil: 'domcontentloaded' }).catch(e => console.error('Goto error:', e.message));
    
    console.log('Waiting for 10s to see if it refreshes or closes...');
    await new Promise(r => setTimeout(r, 10000));
    
    console.log('Done, cleaning up.');
    await browser.close();
}

main().catch(console.error);
