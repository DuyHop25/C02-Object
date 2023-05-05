import { question } from "readline-sync"

// Khai báo kiểu dữ liệu cho đối tượng player
export type Player = {
    id: number,
    name: string,
    yearOfBirth: number,
    gender: boolean
    input: () => void;
    output: (propName: string) => void;
    getAge: () => number;
    setName: (playerName: string) => void;
    setYearOfBirth: (yearOfBirth: number) => void;
    setGender: (gender: boolean) => void;
    update: () => void;
    [key: string]: any;
}

// Khai báo Đối tượng 'player' lưu thông tin của một cầu thủ bóng đá
export const player: Player = {
    // Khai báo thuộc tính của đối tượng
    id: 1,
    name: "Duy Hợp",
    yearOfBirth: 2003,
    gender: true,

    /**
     * Phương thức nhập dữ liệu cho từng thuộc tính
     */
    input() {
        this.id = Number(question("Nhap id cua cau thu:"));
        this.name = question("Nhap ten cua cau thu:");
        this.yearOfBirth = Number(question("Nhap nam sinh cua cau thu:"));
        const gender: any = question("Nhap gioi tinh cua cau thu:");
        this.gender = gender;
    },

    /**
     * Phương thức xuất dữ liệu của một thuộc tính hoặc xuất toàn bộ đối tượng.
     * @param propName Tên của thuộc tính
     */
    output(propName: string) {

        if (propName == "*")
            console.log(this);

        else if (propName in player)
            console.log(player[propName]);

        else
            console.log("Unvalid");
    },

    /**
     * Phương thức tính tuổi của cầu thủ
     * @returns Tuổi của cầu thủ
     */
    getAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    },

    /**
     * Phương thức cập nhập tên của cầu thủ 
     * @param playerName Tên muốn cập nhập
     */
    setName(playerName: string): void {

        // Ràng buộc tên có độ dài trên trong khoảng [3,50] kí tự thì mới cập nhập
        if (playerName.length >= 3 && playerName.length <= 50)
            this.name = playerName;
        // Ngược lại thì không cập nhập
        else
            console.log('Invalid name');

    },

    setYearOfBirth(yearOfBirth: number) {
        // Khai báo 1 biến gán trị cho năm hiện tại
        const currentYear = new Date().getFullYear();
        // Ràng buộc tuổi trong khoảng 1900 đến bây giờ thì mới cập nhập
        if (yearOfBirth >= 1900 && yearOfBirth <= currentYear)
            this.yearOfBirth = yearOfBirth;
        // Ngược lại thì không cập nhập
        else
            console.log('Invalid year of birth');

    },

    /**
     * Phương thức cập nhập giới tính của cầu thủ
     * @param gender Giới tính muốn cập nhập 
     */
    setGender(gender: boolean) {
        // Khai báo biến có kiểu bất kì để ép kiểu cho thuộc tính gender
        let item: any = gender;
        // Nếu tham số là true thì cập nhập giới tính là "nam"
        if (gender == true) {
            item = "nam";
            this.gender = item;
        }
        // Ngược lại flase thì cập nhập giới tính là "nữ"
        else {
            item = "nữ";
            this.gender = item;
        }
    },

    update() {

        let properties: string; // Biến lưu thuộc tính người dùng nhập
        let flag: string = '';  // Biến lưu kí tự điều kiện để cập nhập thuộc tính

        do {
            // In ra đối tượng sau mỗi lần cập nhập
            console.log(this);
            // Điền vào thuộc tính muốn cập nhập
            properties = question("Vui long nhap vao thuoc tinh muon cap nhap:");
            // Nếu thuộc tính tồn tại thì cập nhập
            if (properties in player)
                this[properties] = question(`Nhap lai ${properties}:`)
            // Nếu không tồn tại thì không cập nhập
            else
                console.log("Thuộc tính này không tồn tại trong đối tượng")
            // Thông báo cho người dùng biết và cho phép người dùng nhập lại hoặc dừng lại. 
            flag = question("Nhap phim 'y' de tiep tuc, nhan bat ki phim gi de dung!: ");

        } while (flag == "y"); // Điều kiện để tiếp tục cập nhập
    }

}


function main() {

    //Nhập vào tất cả các thuộc tính của player
    player.input();

    // Xuất dữ liệu của 1 thuộc tính hoặc xuất toàn bộ đối tượng
    player.output("*");   // Truyền đối số "*" thì sẽ xuất toàn bộ đối tượng
    player.output("name");   // Truyền đối số là tên của thuộc tính và in ra thuộc tính đó

    // Tính tuổi của cầu thủ
    console.log(`\n Số tuổi của cầu thủ ${player.name} là: ${player.getAge()}`);

    // Cập nhập tên của cầu thủ
    player.setName("duy");

    // Cập nhập năm sinh của cầu thủ 
    player.setYearOfBirth(2001);

    // Cập nhập giới tính của cầu thủ
    player.setGender(true); // nếu cầu thủ là 'nam' thì truyền vào là "true"
    // player.setGender(flase); // Nếu là 'nữ' thì truyền vào "flase";

    // Cập nhật: Cho phép thay đổi các thông tin bằng cách nhập dữ liệu cho từng thuộc tính. 
    // Chương trình sẽ in ra đối tượng này. Sau đó, cho phép người dùng nhập vào thuộc tính muốn cập nhật. 
    // Chương trình sẽ kiểm tra xem thuộc tính này có tồn tại hay không? Nếu có tồn tại, 
    // chương trình sẽ cho người dùng nhập lại dữ liệu mới cho thuộc tính này. 
    // Nếu không tồn tại, chương trình sẽ thông báo cho người dùng biết và cho phép người dùng nhập lại hoặc dừng lại.
    player.update();
}

main(); 
