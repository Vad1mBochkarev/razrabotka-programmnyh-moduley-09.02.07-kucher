function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <img
        src="https://picsum.photos/seed/img1/300/200"
        alt="Изображение 1"
      />
      <img
        src="https://picsum.photos/seed/img2/300/200"
        alt="Изображение 2"
      />
      <img
        src="https://picsum.photos/seed/img3/300/200"
        alt="Изображение 3"
      />
    </div>
  )
}

export default ImageGallery
