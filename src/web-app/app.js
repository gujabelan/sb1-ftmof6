let peer;
let room;
const peers = {};

function init() {
    peer = new Peer();
    
    peer.on('open', (id) => {
        console.log('My peer ID is: ' + id);
        setupUI();
        
        // Check if there's a room ID in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const roomId = urlParams.get('room');
        if (roomId) {
            document.getElementById('roomId').value = roomId;
            joinRoom();
        }
    });

    peer.on('call', handleIncomingCall);
}

function setupUI() {
    const joinBtn = document.getElementById('joinBtn');
    const createBtn = document.getElementById('createBtn');
    const hangupBtn = document.getElementById('hangupBtn');
    const muteBtn = document.getElementById('muteBtn');
    const sendBtn = document.getElementById('sendBtn');
    
    if (joinBtn) joinBtn.addEventListener('click', joinRoom);
    if (createBtn) createBtn.addEventListener('click', createRoom);
    if (hangupBtn) hangupBtn.addEventListener('click', hangUp);
    if (muteBtn) muteBtn.addEventListener('click', toggleMute);
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);
}

// ... (rest of the functions remain the same)

document.addEventListener('DOMContentLoaded', init);