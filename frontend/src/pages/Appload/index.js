import ApploadList from "../../components/ApploadList";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";

export default function ApploadPage({}) {
  const students1 = [
    {
      id: 1,
      name: "John",
      archivements: `
            Input
            Một số thực là bán kính 
            Giới hạn:

            Làm tròn giá trị 
            Output
            Lần lượt là chu vi và diện tích hình tròn cách nhau bởi 1 dấu cách. Kết quả làm tròn tới chữ số thập phân thứ 3

            Sample
            `,
    },
    {
      id: 2,
      name: "John 2",
      archivements: `
            Input
            Một số thực là bán kính 
            Giới hạn:

            Làm tròn giá trị 
            Output
            Lần lượt là chu vi và diện tích hình tròn cách nhau bởi 1 dấu cách. Kết quả làm tròn tới chữ số thập phân thứ 3

            Sample
            `,
    },
    {
      id: 3,
      name: "John 3",
      archivements: `
            Input
            Một số thực là bán kính 
            Giới hạn:

            Làm tròn giá trị 
            Output
            Lần lượt là chu vi và diện tích hình tròn cách nhau bởi 1 dấu cách. Kết quả làm tròn tới chữ số thập phân thứ 3

            Sample
            `,
    },
    {
      id: 4,
      name: "John 4",
      archivements: `
            Input
            Một số thực là bán kính 
            Giới hạn:

            Làm tròn giá trị 
            Output
            Lần lượt là chu vi và diện tích hình tròn cách nhau bởi 1 dấu cách. Kết quả làm tròn tới chữ số thập phân thứ 3

            Sample
            `,
    },
    {
      id: 3,
      name: "John 5",
      archivements: `
            Input
            Một số thực là bán kính 
            Giới hạn:

            Làm tròn giá trị 
            Output
            Lần lượt là chu vi và diện tích hình tròn cách nhau bởi 1 dấu cách. Kết quả làm tròn tới chữ số thập phân thứ 3

            Sample
            `,
    },
  ];

  const students2 = students1.slice(0, 4);
  const students3 = students1.slice(0, 1);
  const students4 = students1.slice(0, 3);
  const students5 = students1.slice(0, 4);

  const students = [students1, students2, students3, students4, students5];

  return (
    <div className="appload-content">
      <NavBar />

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        {students &&
          students.map((studentsElement, index) => (
            <a
              href={"#course-" + (index + 1)}
              class="nav-item"
              role="presentation"
            >
              <span
                class={"nav-link " + (index === 0 ? "active" : "")}
                id={"course-tab-" + (index + 1)}
                data-bs-toggle="tab"
                data-bs-target={"#course-" + (index + 1)}
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Khoá {index + 1}
              </span>
            </a>
          ))}
      </ul>
 
      <div class="tab-content">
        {students &&
          students.map((studentsElement, index) => (
            <div
              class={"tab-pane " + (index === 0 ? " active " : "")}
              role="tabpanel"
            >
              Khoá {index + 1}
            </div>
          ))}
      </div>

      <div className="container">
        {students &&
          students.map((studentsElement, index) => (
            <div key={index} className="appload-class" id={"course-" + (index + 1)}>
              <h2>Sinh viên khoá {index + 1}</h2>
              <ApploadList users={studentsElement} />
            </div>
          ))}
      </div>
      <div className="bg-dark">
        <Footer />
      </div>
    </div>
  );
}
