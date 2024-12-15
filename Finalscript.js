function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  function showDetails(type) {
    const details = {
        transparent: `
        <h3>Transparent Algorithm Settings</h3>
        <ul>
          <li><strong>Content Preferences:</strong> Tailor your feed by selecting the topics and content sources you want to prioritize.</li>
          <li></li>
          <li><strong>Algorithm Insights:</strong> View how the algorithm determines your feed and why certain posts are recommended.</li>
          <li></li>
          <li><strong>Override Controls:</strong> Bypass the algorithm to explore content beyond the usual suggestions.</li>
          <li></li>
        </ul>
      `,
      privacy: `
        <h3>Privacy Tracker</h3>
        <ul>
          <li><strong>Data Dashboard:</strong> See what data is being collected by platforms you use daily.</li>
          <li></li>
          <li><strong>Permission Controls:</strong> Easily grant or revoke permissions for apps and services.</li>
          <li></li>
          <li><strong>Encryption Visualizer:</strong> Monitor the security level of your online communications in real-time.</li>
          <li></li>
        </ul>
      `,
      aid: `
        <h3>Mutual Aid Boards</h3>
        <ul>
          <li><strong>Community Listings:</strong> Post requests for help or browse offers for free resources and services.</li>
          <li></li>
          <li><strong>Local Connection:</strong> Join neighborhood-based groups to coordinate on shared needs and resources.</li>
          <li></li>
          <li><strong>Volunteer Opportunities:</strong> Find ways to contribute your skills or time to grassroots initiatives.</li>
          <li></li>
        </ul>
      `,
    };
    document.getElementById('details').innerHTML = `<p>${details[type]}</p>`;
  }
  
  
    // Function to toggle dropdown visibility
    function toggleDropdown(id) {
      const element = document.getElementById(id);
      element.classList.toggle('hidden');
    }

    // Function to show details dynamically
    function showDetails(section) {
      const details = document.getElementById('details');
      const transparentSection = document.getElementById('transparent-settings');

      // Clear current content
      details.innerHTML = '';
      transparentSection.classList.add('hidden');

      // Add content based on the button clicked
      if (section === 'transparent') {
        transparentSection.classList.remove('hidden');
      } else if (section === 'privacy') {
        details.innerHTML = '<h3>Privacy Tracker</h3><p>Monitor how your data is collected and used.</p>';
      } else if (section === 'aid') {
        details.innerHTML = '<h3>Mutual Aid Boards</h3><p>Connect with community-driven initiatives and mutual support networks.</p>';
      }
    }
  