(function () {
  function Icon({ name, size = 16, style, invert = false }) {
    return (
      <img
        src={`https://unpkg.com/lucide-static@latest/icons/${name}.svg`}
        width={size}
        height={size}
        alt=""
        style={{ display: 'block', filter: invert ? 'invert(1)' : 'none', opacity: 0.85, ...style }}
      />
    );
  }
  window.Icon = Icon;
})();
