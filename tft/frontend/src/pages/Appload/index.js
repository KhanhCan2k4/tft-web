import ApploadUser from "../../components/AploadUser";
import ApploadList from "../../components/ApploadList";
import DefaultLayout from "../../layouts/DefaultLayout";

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
  const students3 = students1.slice(0, 3);
  const students4 = students1.slice(0, 2);
  const students5 = students1.slice(0, 1);

  return (
    <DefaultLayout
      slot={
        <div className="appload-content">
          <h1 className="title p-4">
            Vinh danh sinh viên xuất sắc nhất các khoá
          </h1>
          <hr />

          <div className="appload-class">
            <h2>Sinh viên khoá 1</h2>
            <ApploadList users={students1} />
          </div>

          <div className="appload-class">
            <h2>Sinh viên khoá 2</h2>
            <ApploadList users={students2} />
          </div>

          <div className="appload-class">
            <h2>Sinh viên khoá 3</h2>
            <ApploadList users={students3} />
          </div>

          <div className="appload-class">
            <h2>Sinh viên khoá 4</h2>
            <ApploadList users={students4} />
          </div>

          <div className="appload-class">
            <h2>Sinh viên khoá 5</h2>
            <ApploadList users={students5} notLast={false} />
          </div>
        </div>
      }
    ></DefaultLayout>
  );
}
