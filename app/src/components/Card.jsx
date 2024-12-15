import '../App.scss';

function Card() {
  return (
    <div className='col'>
      <div className='card shadow-sm'>
        <svg
          className='bd-placeholder-img card-img-top'
          width='100%'
          height='225'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          aria-label='Placeholder: Thumbnail'
          preserveAspectRatio='xMidYMid slice'
          focusable='false'
        >
          <image
            href='../assets/robot.jpg'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
          />
        </svg>
        <div className='card-body'>
          <p className='card-text'>Line Following Robot</p>
          <div className='d-flex justify-content-between align-items-center'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Learn More
            </button>
            <small className='text-body-secondary'>2022</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
