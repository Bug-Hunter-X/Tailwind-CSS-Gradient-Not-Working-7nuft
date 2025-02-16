```javascript
// wrong
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
  <h1>This is a gradient background</h1>
</div>

// correct
<div style="background-image: linear-gradient(to right, blue 50%, purple 50%); padding: 1rem; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
  <h1>This is a gradient background</h1>
</div>
```