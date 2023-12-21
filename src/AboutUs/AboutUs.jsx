import React from 'react'

export default function AboutUs() {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-lg-6">
            <div className='title-div p-4' style={{ top: '50%', right: '50%', color: '#333' }}>
              <h3 className="" style={{ fontSize: '35px' }}>
                HAKKIMIZDA
              </h3>
              <p className=' mt-5 aboutUs-text'>
                Ay Akademi, nitelikli eğitim kadrosu ve öğrenci odaklı yaklaşımıyla bilinen, üniversite sınavlarına hazırlanan gençleri başarıya taşıyan bir eğitim kurumudur. Kurum, öğrencilerin potansiyellerini en üst düzeye çıkarmak ve akademik hedeflerine ulaşmalarını sağlamak amacıyla kurulmuştur. Ay Akademi, uzun yıllara dayanan deneyimi ve öğrenci memnuniyeti odaklı hizmet anlayışıyla bilinir.
              </p>

              <h3 className="" style={{ fontSize: '25px' }}>
                MİSYONUMUZ
              </h3>
              <p className=' mt-5 aboutUs-text'>
                Ay Akademi olarak misyonumuz, öğrencilere kaliteli eğitim sağlamak ve onları üniversite sınavlarına en iyi şekilde hazırlamaktır. Öğrencilerimizin sadece akademik başarılarını değil, aynı zamanda bireysel gelişimlerini de önemseyerek, onları topluma faydalı bireyler olarak yetiştirmeyi amaçlıyoruz. Öğrencilerimizin potansiyellerini keşfetmelerine rehberlik ederek, özgüvenli, bilgili ve etik değerlere sahip bireyler olmalarını destekliyoruz.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/images/students-studying-vector.jpg" alt="" loading="lazy" width="100%" height="auto" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="" style={{ fontSize: '25px' }}>
              VİZYONUMUZ
            </h3>
            <p className=' mt-5 aboutUs-text'>
              Ay Akademi, geleceğin liderlerini yetiştirmeyi hedefleyen bir vizyonla hareket eder. Türkiye'nin en iyi üniversitelerine girişte öncü bir rol oynamak ve öğrencilerimizin ulusal ve uluslararası düzeyde rekabet avantajı elde etmelerini sağlamak için sürekli olarak kendimizi yeniliyoruz. Eğitimde kalite standartlarını yükselterek, öğrencilerimizi bilgi, beceri ve etik değerlerle donatılmış bireyler olarak yetiştirme çabası içindeyiz.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
