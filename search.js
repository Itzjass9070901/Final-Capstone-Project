document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearHistory');
    const historyBox = document.getElementById('searchHistory');
    const mothContainer = document.getElementById('mothContainer');
  
    // Load history on page load
    renderSearchHistory();
  
    // Search on button click
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;
  
      const results = mothData.filter(moth =>
        moth.name.toLowerCase().includes(query)
      );
  
      displayMoths(results);
      saveToHistory(query);
    });
  
    // Clear history
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem('mothSearchHistory');
      historyBox.innerHTML = '';
    });
  
    // Save term to localStorage and re-render
    function saveToHistory(term) {
      let history = JSON.parse(localStorage.getItem('mothSearchHistory')) || [];
      if (!history.includes(term)) {
        history.unshift(term);
        if (history.length > 10) history.pop(); // limit to 10
        localStorage.setItem('mothSearchHistory', JSON.stringify(history));
      }
      renderSearchHistory();
    }
  
    // Render search history
    function renderSearchHistory() {
      const history = JSON.parse(localStorage.getItem('mothSearchHistory')) || [];
      historyBox.innerHTML = '';
      history.forEach(item => {
        const termEl = document.createElement('div');
        termEl.className = 'history-item';
        termEl.textContent = item;
        termEl.addEventListener('click', () => {
          searchInput.value = item;
          searchBtn.click();
        });
        historyBox.appendChild(termEl);
      });
    }
  });
  