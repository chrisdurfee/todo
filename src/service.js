/**
 * This will setup the service worker.
 *
 * @returns {void}
 */
export const setupService = () =>
{
    // service workers can only work on secure connections
    const protocol = window.location.protocol.replace(':', '');
    if (!('serviceWorker' in navigator) || protocol === 'http')
    {
        return false;
    }

    const sw = navigator.serviceWorker;
    sw.register('./sw.js', {
        scope: './'
    }).then((serviceWorker) =>
    {

    });
};