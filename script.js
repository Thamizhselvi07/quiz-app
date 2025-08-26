body {
  font-family: Arial, sans-serif;
  background: #f8f9fa;
  margin: 0; padding: 0;
}
.screen { display: none; padding: 20px; }
.active { display: block; }
h1, h2, h3 { margin: 10px 0; }
button {
  background: #007bff; color: white;
  padding: 10px 20px; border: none;
  border-radius: 8px; margin: 10px 0;
  cursor: pointer; font-size: 16px;
}
button:hover { background: #0056b3; }
.options button {
  display: block; width: 100%;
  margin: 8px 0; text-align: left;
  background: #fff; color: #333;
  border: 1px solid #ccc;
}
.options button.selected {
  background: #cce5ff;
  border-color: #007bff;
}
.progress-bar {
  height: 10px; background: #ddd; border-radius: 5px;
  margin: 10px 0; overflow: hidden;
}
.progress-fill {
  height: 10px; background: #007bff; width: 0%;
}
