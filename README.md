# Nathan Brill | Full Stack Developer & Flutter Specialist 👨‍💻
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
  <!-- Background -->
  <rect width="600" height="400" fill="#0d1117" />
  
  <!-- Game border -->
  <rect x="50" y="50" width="500" height="300" fill="none" stroke="#30363d" stroke-width="2" />
  
  <!-- Game title -->
  <text x="300" y="30" font-family="Arial" font-size="20" fill="#c9d1d9" text-anchor="middle">⭐ STAR CATCHER GAME ⭐</text>
  
  <!-- Instructions -->
  <text x="300" y="380" font-family="Arial" font-size="14" fill="#8b949e" text-anchor="middle">Fork this repo to play your own version!</text>
  
  <!-- Score -->
  <text x="80" y="80" font-family="Arial" font-size="16" fill="#c9d1d9">SCORE: 42</text>
  
  <!-- Player -->
  <g>
    <circle cx="300" cy="320" r="15" fill="#58a6ff">
      <!-- Player movement animation -->
      <animate 
        attributeName="cx" 
        values="100;200;300;400;500;400;300;200;100" 
        dur="10s" 
        repeatCount="indefinite" />
    </circle>
    <text x="300" y="325" font-family="Arial" font-size="16" fill="#0d1117" text-anchor="middle">🧙</text>
    <!-- Sync text movement with circle -->
    <animate 
      attributeName="x" 
      values="100;200;300;400;500;400;300;200;100" 
      dur="10s" 
      repeatCount="indefinite" />
  </g>
  
  <!-- Stars -->
  <!-- Star 1 -->
  <text x="150" y="100" font-family="Arial" font-size="20" fill="#ffca28" text-anchor="middle">⭐
    <!-- Vertical falling animation -->
    <animate 
      attributeName="y" 
      values="100;350;100" 
      dur="5s" 
      repeatCount="indefinite" />
  </text>
  
  <!-- Star 2 -->
  <text x="250" y="150" font-family="Arial" font-size="20" fill="#ffca28" text-anchor="middle">⭐
    <animate 
      attributeName="y" 
      values="150;350;150" 
      dur="7s" 
      repeatCount="indefinite" />
  </text>
  
  <!-- Star 3 -->
  <text x="350" y="120" font-family="Arial" font-size="20" fill="#ffca28" text-anchor="middle">⭐
    <animate 
      attributeName="y" 
      values="120;350;120" 
      dur="4s" 
      repeatCount="indefinite" />
  </text>
  
  <!-- Star 4 -->
  <text x="450" y="180" font-family="Arial" font-size="20" fill="#ffca28" text-anchor="middle">⭐
    <animate 
      attributeName="y" 
      values="180;350;180" 
      dur="6s" 
      repeatCount="indefinite" />
  </text>
  
  <!-- Instructions box -->
  <rect x="200" y="200" width="200" height="80" fill="#161b22" stroke="#30363d" stroke-width="1" rx="5" />
  <text x="300" y="230" font-family="Arial" font-size="14" fill="#c9d1d9" text-anchor="middle">This animated SVG game</text>
  <text x="300" y="250" font-family="Arial" font-size="14" fill="#c9d1d9" text-anchor="middle">runs in your GitHub README!</text>
  <text x="300" y="270" font-family="Arial" font-size="14" fill="#58a6ff" text-anchor="middle">Star ⭐ to play!</text>
</svg>
