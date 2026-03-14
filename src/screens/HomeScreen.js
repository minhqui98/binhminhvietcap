
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import UncontrolledExample from '../components/Carousel';
import data from '../data';
// import productsData from "../productsData"


function HomeScreen() {
  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: true,
  //   error: '',
  // });
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: 'FETCH_REQUEST' });
  //     try {
  //       const result = await axios.get('/api/products');
  //       dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
  //     } catch (err) {
  //       dispatch({ type: 'FETCH_FAIL', payload: err.message });
  //     }

  //     // setProducts(result.data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <Helmet>
        <title>Binhminhvietcap</title>
      </Helmet>
      {/* <img src="/images/bannerto/bannerto.jpg" style={{ maxWidth: '100', height: 'auto' }} /> */}
      <div className="banner"></div>
      <UncontrolledExample />
      <h1 style={{ fontSize: '30px', textAlign: 'center', padding: '20px 0' }}>Về Công ty</h1>
      <p style={{ fontSize: '19px' }}>
        Được thành lập từ những năm đầu 2000, Bình Minh Việt là doanh nghiệp chuyên sản xuất và cung cấp các loại nón
        thời trang, với hơn 20 năm kinh nghiệm trong nghề. Trải qua hành trình dài phát triển, chúng tôi luôn kiên định
        với mục tiêu mang đến những sản phẩm chất lượng cao, giá cả hợp lý và phù hợp với thị hiếu người tiêu dùng trong
        và ngoài nước.
      </p>
      <p style={{ fontSize: '19px' }}>
        Danh mục sản phẩm của Bình Minh Việt rất đa dạng, bao gồm: nón két, nón bo, nón tennis, nón lưới và nhiều mẫu
        thiết kế khác được cập nhật thường xuyên theo xu hướng thị trường. Chúng tôi đặc biệt chú trọng đến từng chi
        tiết trong khâu sản xuất – từ lựa chọn nguyên liệu, cắt may đến hoàn thiện sản phẩm – tất cả đều được thực hiện
        thủ công bởi đội ngũ thợ lành nghề, dày dạn kinh nghiệm.
      </p>
      <p style={{ fontSize: '19px' }}>
        Không chỉ phục vụ thị trường trong nước, sản phẩm của Bình Minh Việt còn được xuất khẩu sang nhiều quốc gia,
        khẳng định uy tín và chất lượng của thương hiệu Việt trên thị trường quốc tế.
      </p>
      <p style={{ fontSize: '19px' }}>
        Chúng tôi tin rằng, sự bền vững và thành công lâu dài đến từ niềm tin của khách hàng. Vì vậy, Bình Minh Việt
        luôn nỗ lực không ngừng để nâng cao chất lượng sản phẩm, cải tiến mẫu mã và xây dựng mối quan hệ hợp tác lâu
        dài, dựa trên tinh thần uy tín – chất lượng – chuyên nghiệp.
      </p>
      <h1 style={{ fontSize: '30px', textAlign: 'center', padding: '10px 0' }}>Sản phẩm</h1>
      <div className="products">
        <Row>
          {data.products?.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7093423545753!2d106.63825683271958!3d10.858202980445842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529edb404e6cf%3A0x572e67d6bdaa6906!2sC%C3%B4ng%20ty%20TNHH%20Sunshine%20Vi%E1%BB%87t!5e0!3m2!1svi!2s!4v1773459390826!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}
export default HomeScreen;
