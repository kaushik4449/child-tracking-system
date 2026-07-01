let presenceCounter = 0;
let notificationCounter = 0;

// Sidebar navigation switcher function
function switchView(viewName) {
    const dashboardView = document.getElementById('dashboardView');
    const parentsView = document.getElementById('parentsView');
    const navDashboard = document.getElementById('navDashboard');
    const navParents = document.getElementById('navParents');

    if (viewName === 'dashboard') {
        dashboardView.style.display = 'block';
        parentsView.style.display = 'none';
        navDashboard.classList.add('active');
        navParents.classList.remove('active');
    } else if (viewName === 'parents') {
        dashboardView.style.display = 'none';
        parentsView.style.display = 'block';
        navDashboard.classList.remove('active');
        navParents.classList.add('active');
    }
}

// Simulated ID Card scan logic
function triggerHardwareScan() {
    const dropdown = document.getElementById('studentSelector');
    const activeOption = dropdown.options[dropdown.selectedIndex];
    
    const uid = dropdown.value;
    const studentName = activeOption.getAttribute('data-name');
    
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const fallbackRow = document.getElementById('noDataRow');
    if (fallbackRow) fallbackRow.remove();

    const tableBody = document.getElementById('logRecords');
    const rowHtml = `
        <tr>
            <td><strong>${uid}</strong></td>
            <td>${studentName}</td>
            <td>${timeString}</td>
            <td><span class="badge">API Notification Sent</span></td>
        </tr>
    `;
    tableBody.insertAdjacentHTML('afterbegin', rowHtml);

    presenceCounter++;
    notificationCounter++;
    document.getElementById('presentCount').innerText = presenceCounter;
    document.getElementById('smsCount').innerText = notificationCounter;

    const alertBox = document.getElementById('smsWidget');
    const msgBody = document.getElementById('smsMessage');
    const smsTimeLabel = document.getElementById('smsTime');

    alertBox.style.display = 'none';
    
    smsTimeLabel.innerText = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    msgBody.innerHTML = `Dear Parent, your ward <b>${studentName}</b> passed through Gate 1 and logged into campus successfully at <b>${timeString}</b>.`;

    setTimeout(() => {
        alertBox.style.display = 'block';
    }, 20);
}