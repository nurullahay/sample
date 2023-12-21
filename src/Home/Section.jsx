import React from 'react';

export default function Section() {
  const content = [
    {
      id: 1,
      imgSrc: '/images/university-in.jpg',
      title: 'Bire Bir Danışmanlık',
      subTitle: 'En iyi sonuçları almanıza yardımcı olmak için bire bir başarı takibi sağlıyoruz',
    },
    {
      id: 2,
      imgSrc: '/images/class-in.jpg',
      title: 'Verimli Çalışma',
      subTitle: 'Kalabalık olmayan sınıflarda üst düzey verimle ders anlatımı',
    },
    {
      id: 3,
      imgSrc: '/images/old-books.jpg',
      title: 'Doğru Kaynak',
      subTitle: 'Sizler için seçeceğimiz kaynaklarla hedefe ilerleyin',
    },
  ];

  return (
    <div className="container-x container">
      <h2 className='section-header text-center m-4'>Ay Akademi Fakından Yararlanın</h2>
      <div className="row">
        {content.map(data => (
          <div key={data.id} className="col-lg-4">
            <div className="card">
              <div className="imgBox">
                <img src={data.imgSrc} alt={data.title} loading="lazy" width="100%" height="100%" />
              </div>
              <div className="content">
                <div className='section-card-arrow'>
                  <img
                    src="/icons/arrow-up.svg"
                    alt="Arrow Up Icon"
                    className='arrow'
                    style={{ fill: 'white' }} // veya CSS dosyanızda tanımlayabilirsiniz.
                  />
                </div>
                <div className="contentBox">
                  <h3>
                    {data.title}
                    <br />
                    <span>{data.subTitle}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
