function renderMoths(moths) {
    console.log('renderMoths called with', moths.length, 'moths');
  
    const resultsContainer = document.getElementById('mothContainer');
  
    // Check if results container exists
    if (!resultsContainer) {
      console.error('Results container not found');
      return;
    }
  
    // Clear the container
    resultsContainer.innerHTML = '';
  
    // If no moths found, show a message
    if (moths.length === 0) {
      console.log('No moths found, showing empty message');
      resultsContainer.innerHTML = '<p id="noResults">No moths found</p>';
      return;
    }
  
    // Collect all moth cards
    const mothElements = [];
  
    moths.forEach(moth => {
      // Validate moth object
      if (!moth || typeof moth.name !== 'string') {
        console.warn('Invalid moth object:', moth);
        return;
      }
  
      const mothDiv = document.createElement('div');
      mothDiv.className = 'moth-card';
      mothDiv.innerHTML = `
        <div class="moth-header">
          <img class="moth-img" src="${moth.image || ''}" alt="Image of ${moth.name}" />
          <h3>${moth.name}</h3>
          <p><em>${moth.scientificName}</em></p>
          <p><strong>Region:</strong> ${moth.region || 'Unknown'}</p>
          <a href="${moth.wiki || '#'}" target="_blank">
            <button class="learn-more-btn">Learn More</button>
          </a>
        </div>
      `;
  
      mothElements.push(mothDiv);
    });
  
    // Append all moth cards at once
    mothElements.forEach(element => {
      resultsContainer.appendChild(element);
    });
  
    console.log(`Successfully rendered ${moths.length} moths`);
  }
  
  // Example usage:
  // renderMoths(mothData); // Call this after loading your mothData
  