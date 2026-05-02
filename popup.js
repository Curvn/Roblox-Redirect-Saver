const input = document.getElementById('placeId');
const saveBtn = document.getElementById('saveBtn');

chrome.storage.local.get(['placeId'], (result) => {
    if (result.placeId) {
        input.value = result.placeId;
    }
});

saveBtn.addEventListener('click', () => {
    const placeId = input.value.trim();

    chrome.storage.local.set({ placeId }, () => {
        alert('Saved successfully!');
    });
});