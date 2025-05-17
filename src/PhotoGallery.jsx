export default function PhotoGallery() {
  const photos = Array.from(
    { length: 10 },
    (_, i) => `/photos/photo${i + 1}.jpg`
  );

  return (
    <div>
      <h2 style={{ marginTop: "60px" }}>Kenangan Kita</h2>
      <div className="photo-grid">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`Kenangan ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
