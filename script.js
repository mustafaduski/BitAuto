// script.js

// Function to toggle the Sidebar menu
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active'); // Toggle 'active' class to show/hide the sidebar
}

// Function to open the USDT Payment Modal
function openPaymentModal() {
    const paymentModal = document.getElementById('usdtPaymentModal');
    paymentModal.classList.add('active'); // Add 'active' class to show the modal
}

// Function to close the USDT Payment Modal
function closePaymentModal() {
    const paymentModal = document.getElementById('usdtPaymentModal');
    paymentModal.classList.remove('active'); // Remove 'active' class to hide the modal
}

// Function to copy the Wallet Address to the clipboard
function copyWalletAddress() {
    const walletAddress = document.getElementById('walletAddress');
    const textArea = document.createElement('textarea');
    textArea.value = walletAddress.innerText; // Copy the content of Wallet Address
    document.body.appendChild(textArea);
    textArea.select(); // Select the text
    document.execCommand('copy'); // Execute copy command
    document.body.removeChild(textArea); // Remove the textarea after copying

    // Optional: Provide feedback to the user
    alert('Wallet Address copied to clipboard!');
}

// Event listeners for opening and closing the Sidebar and Payment Modal
document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);
document.getElementById('openPaymentModalBtn').addEventListener('click', openPaymentModal);
document.getElementById('closePaymentModalBtn').addEventListener('click', closePaymentModal);
document.getElementById('walletAddress').addEventListener('click', copyWalletAddress);

