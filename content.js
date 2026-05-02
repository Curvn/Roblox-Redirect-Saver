async function getPlaceId() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['placeId'], (result) => {
            resolve(result.placeId || null);
        });
    });
}

async function redirectToGame() {
    const placeId = await getPlaceId();

    if (!placeId) {
        alert('Please set a Place ID in the extension settings.');
        return;
    }

    window.location.href = `roblox://placeId=${placeId}`;
}

function isLimitedItem() {
    const allElements = document.querySelectorAll('*');

    for (const element of allElements) {
        const text = element.textContent?.trim()?.toLowerCase();

        if (text && text.includes('holding period')) {
            return true;
        }
    }

    return false;
}

function updateButton() {
    if (isLimitedItem()) return;

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        const text = button.innerText?.trim()?.toLowerCase();

        if (
            text === 'buy' ||
            text === 'get' ||
            text.includes('buy now')
        ) {
            if (button.dataset.redirectApplied) return;

            button.dataset.redirectApplied = 'true';

            button.innerText = 'PLAY GAME';

            const cloned = button.cloneNode(true);
            button.parentNode.replaceChild(cloned, button);

            cloned.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                redirectToGame();
            });
        }
    });
}

function bootScan(retries = 10) {
    updateButton();

    if (retries <= 0) return;

    setTimeout(() => {
        bootScan(retries - 1);
    }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
    bootScan();
});

const observer = new MutationObserver(() => {
    updateButton();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
