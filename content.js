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
        alert("No Place ID set");
        return;
    }

    window.location.href = `roblox://placeId=${placeId}`;
}

function findButton() {
    return document.querySelector(
        'button.shopping-cart-buy-button.btn-growth-lg.PurchaseButton'
    );
}

function patchButton() {
    const btn = findButton();
    if (!btn) return;

    if (btn.dataset.patched) return;

    btn.dataset.patched = "true";
    btn.innerText = "PLAY GAME";

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        redirectToGame();
    });
}

patchButton();

const observer = new MutationObserver(() => {
    patchButton();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
