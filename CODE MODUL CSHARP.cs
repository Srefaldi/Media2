namespace CsharpLearn
{
    class Animal
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Animal List");
            Console.WriteLine("-----------------");
            Console.WriteLine("1. Chicken");
            Console.WriteLine("2. Duck");
        }
    }
}


namespace CsharpLearn;
using System{
    class MyClass
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
}


using System;
namespace CsharpLearn
{
    class MyClass
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}


using System;
namespace CsharpLearn
{
    class MyClass
    {
        Console.WriteLine("Hello World!");
        static void Main(string[] args)
        {
        }
    }
}


using System;
namespace CsharpLearn
{
    class MyClass
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
}


using System;
namespace CsharpLearn
{
    class MyClass
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}





namespace CsharpLearn
{
    class Pakaian
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ini Baju");
            Console.WriteLine("Ini Celana");
            Console.WriteLine("Ini Topi");
        }
    }
}


namespace CsharpLearn
{
    class Animal
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Mobil");
            Console.WriteLine("Motor");
            Console.WriteLine("Sepeda");
        }
    }




    Console.WriteLine("Hello World!");

Console.WriteLine(10);
Console.WriteLine(7.5);

Console.WriteLine("Hello " + "Hello");

Console.WriteLine("Hello " + 10);

Cobalah kode program pada complier :
Console.WriteLine(10 + 10);



Console.WriteLine("Cetak Teks");
Console.WriteLine["Cetak Teks"];
Console.WriteLine{"Cetak Teks"};
Console.WriteLine < "Cetak Teks" >
Console.WriteLine("Cetak Teks"})



/* Program ini bertujuan untuk
      menampilkan angka 9 
      dengan menggunakan fungsi print */

Console.WriteLine(9); // Menampilkan angka 9

Console.WriteLine("Hi"); // Tidak Error
Console.WriteLine("Halo); // Error dikarnakan string tidak dikutip pada kedua sisi


Console.WriteLine(9 / 3); // Tidak Error, akan menghasilkan output : 3
Console.WriteLine(9 / 0); // Error, bilangan tidak bisa dibagi 0 dan menghasilkan kesalahan runtime
#output : 
error CS0020: Division by constant zero 
The build failed. Fix the build errors and run again.



class Latihan
{
    public static void Main(string[] args)
    {

        Console.WriteLine();
    }
}


class Latihan
{
    public static void Main(string[] args)
    {


    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        /*
        buatlah
        komentar
        lebih dari satu baris
        */
    }
}

public class Latihan
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Ayo Belajar");

        _____


   }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello " + 10);
    }
}



using System;
namespace CsharpLearn
{
    class MyClass
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
}

#output
Motor
Sepeda
Mobil

Console.WriteLine<"Cetak Teks">
Console.WriteLine("Cetak Teks"})






// BAB 2
int s;

[tipe data] namaVariabel;



public class ContohStatic
{
    public static int JumlahInstance;

    public ContohStatic()
    {
        JumlahInstance++;
    }

    public static void TampilkanJumlahInstance()
    {
        Console.WriteLine("Jumlah instance: " + JumlahInstance);
    }

    public static void Main(string[] args)
    {
        new ContohStatic();
        new ContohStatic();
        new ContohStatic();
        ContohStatic.TampilkanJumlahInstance();
    }
}


public class Mahasiswa
{
    public string Nama;
    public int Nim;

    public Mahasiswa(string nama, int nim)
    {
        Nama = nama;
        Nim = nim;
    }

    public void TampilkanInfo()
    {
        Console.WriteLine("Nama: " + Nama + ", NIM: " + Nim);
    }

    public static void Main(string[] args)
    {
        Mahasiswa mhs1 = new Mahasiswa("Sopia", 12345);
        Mahasiswa mhs2 = new Mahasiswa("Refaldi", 67890);

        mhs1.TampilkanInfo();
        mhs2.TampilkanInfo();
    }
}


public class ContohLokal
{
    public void Hitung()
    {
        int nilai = 10;
        Console.WriteLine("Nilai: " + nilai);
    }

    public static void Main(string[] args)
    {
        ContohLokal contoh = new ContohLokal();
        contoh.Hitung();
    }
}


public class ContohParameter
{
    public void TampilkanPesan(string pesan)
    {
        Console.WriteLine("Pesan: " + pesan);
    }

    public static void Main(string[] args)
    {
        ContohParameter contoh = new ContohParameter();
        contoh.TampilkanPesan("Hello, World!");
    }
}



// mendeklarasikan variabel kosong
string alamat;
int umur;
float beratBadan;
bool isMenikah;

// inisialisasi variabel
alamat = "Handil Bakti No. 26";
umur = 18;
beratBadan = 49.5;
isMenikah = false;

// deklarasi sekaligus inisialisasi variabel
string nama = "Sopia Refaldi";
int angkatan = 10;
float nilaiAkademik = 3.84;

var namaVariabel = "isi variabel";


// deklarasi sekaligus inisialisasi variabel
var nama = "Sopia Refaldi";
var umur = 18;
var nilaiAkademik = 3.84;


using System;
namespace CsharpLearn
{

    class CodingSample
    {
        static void Main(string[] args)
        {
            string nama = "Hisana Hisa";
            int angkatan = 12;
            float nilaiUjian = 80;

            Console.WriteLine(nama);
            Console.WriteLine("angkatan : " + angkatan);
            Console.WriteLine("nilai ujian : " + nilaiUjian);
        }
    }
}


namespace CsharpLearn
{

    class UjiPengetahuan
    {
        static void Main(string[] args)
        {
            string namaPlayer = "Jamal";
            string namaEnemy = "Riska";
            int finalScore = 90;

            Console.WriteLine(namaPlayer + " vs " + namaEnemy);
            Console.WriteLine("final score : " + finalScore);
        }

    }

}



using System;
namespace CsharpLearn
{

    class UjiPengetahuan
    {
        static void Main(string[] args)
        {
            string namaPlayer = "Jamal";
            string namaEnemy = "Riska";
            int finalScore = 90;

            Console.WriteLine(namaPlayer + " vs " + namaEnemy);
            Console.WriteLine("final score : " + finalScore);
        }

    }

}


public class DeklarasiVariabel
{
    public static void Main(string[] args)
    {
        int A = 10, B = 40, C = 13;
        Console.WriteLine(A + B + C);
    }
}


< access_modifier > const < tipe_data > < NAMA_KONSTANTA > = nilai_konstanta;


public class VariabelKonstanta
{
    public const int KURS_DOLLAR = 15000;
    public const double PI = 3.14;
    public const string WEBSITE = "BelajarCSharp";

    public static void Main(string[] args)
    {
        Console.WriteLine(KURS_DOLLAR);
        Console.WriteLine(PI);
        Console.WriteLine(WEBSITE);
    }
}





using System;

class ProgramInput
{
    static void Main(String[] args)
    {
        Console.WriteLine("=== PERCOBAAN SINTAKS INPUT ===");
        Console.Write("Silahkan masukan nama anda: ");
        string nama = Console.ReadLine();
        Console.WriteLine("Hi, " + nama + " selamat datang!");
    }
}


string nama = Console.ReadLine();
Console.WriteLine("Hi, " + nama + " selamat datang!");
Console.WriteLine("Hi, {0} selamat datang!", nama);
Console.WriteLine($"Hi, {nama} selamat datang!");


string nama;
nama = Console.ReadLine();

Console.ReadLine("Halo + nama !");
#target output
Irwan[input string]
Halo, Irwan! 





nama = Console.ReadLine();
string nama;
Console.WriteLine($"Halo {0} !");

B
string nama;
nama = Console.ReadLine();
Console.WriteLine("Halo " + nama + "!");

C
string nama;
nama = Console.WriteLine();
Console.ReadLine($"Halo {nama} !");

string nama;
nama = Console.ReadLine();
Console.WriteLine("Halo " + nama + "!");
Console.ReadLine();


string nama;
nama = Console.ReadLine();
Console.WriteLine("Halo " + "nama" + "!");




public class Latihan
{
    public static void Main(string[] args)
    {
        int x =             ;
        int y =             ;
        int hasil = x + y;

        Console.WriteLine("Hasil penjumlahan: " +           );
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        ___ nama = "Budi";
        ___ umur = 25;
        ___ tinggi = 170.5;

        Console.WriteLine("Nama: " + nama);
        Console.WriteLine("Umur: " + umur);
        Console.WriteLine("Tinggi: " + tinggi);
    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        ___ ___      PI = 3.14;
        Console.WriteLine("Nilai PI: " + ___);
    }
}




public class Latihan
{
    public static void CetakAngka()
    {
        ___ angka = 10;
        Console.WriteLine("Angka lokal: " + ___);
    }

    public static void Main(string[] args)
    {
        CetakAngka();
    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        string nama = "Andi";
        Console.WriteLine(___);
    }
}




// BAB 3
public class TipeDataNilai
{
    public static void Main(string[] args)
    {
        int var1 = 13;
        float var2 = 0.13f;
        double var3 = 0.1318;
        bool var4 = true;
        char var5 = 'A';

        Console.WriteLine(var1);
        Console.WriteLine(var2);
        Console.WriteLine(var3);
        Console.WriteLine(var4);
        Console.WriteLine(var5);
    }
}




public class TipeDataNilai
{
    public static void Main(string[] args)
    {
        int var1 = 13;
        float var2 = 0.13f;
        double var3 = 0.1318;
        bool var4 = true;
        char var5 = 'A';

        Console.WriteLine(var1);
        Console.WriteLine(var2);
        Console.WriteLine(var3);
        Console.WriteLine(var4);
        Console.WriteLine(var5);
    }
}



public class BelajarCSharp
{
    public static void Main(string[] args)
    {

        int var1 = 0b10100100;
        int var2 = 164;
        int var3 = 0xA4;

        System.Console.WriteLine("var1 (binary) = " + var1);
        System.Console.WriteLine("var2 (decimal) = " + var2);
        System.Console.WriteLine("var3 (hexadecimal) = " + var3);
    }
}



public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        byte var1;
        short var2;
        int var3;
        long var4;

        Console.WriteLine("var1 (byte): ");
        var1 = Convert.ToByte(Console.ReadLine());

        Console.WriteLine("var2 (short): ");
        var2 = short.Parse(Console.ReadLine());

        Console.WriteLine("var3 (int): ");
        var3 = int.Parse(Console.ReadLine());

        Console.WriteLine("var4 (long): ");
        var4 = long.Parse(Console.ReadLine());

        Console.WriteLine("** Hasil **");
        Console.WriteLine("var1 = " + var1);
        Console.WriteLine("var2 = " + var2);
        Console.WriteLine("var3 = " + var3);
        Console.WriteLine("var4 = " + var4);
    }
}





public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        float var1;
        double var2;
        decimal var3;

        var1 = 136.18F;
        var2 = 136.18D;
        var3 = 136.18M;

        Console.WriteLine("var1 = " + var1);
        Console.WriteLine("var2 = " + var2);
        Console.WriteLine("var3 = " + var3);
    }
}

public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        Console.Write("var1 (float): ");
        float var1 = Convert.ToSingle(Console.ReadLine());

        Console.Write("var2 (double): ");
        double var2 = Convert.ToDouble(Console.ReadLine());

        Console.Write("var3 (decimal): ");
        decimal var3 = Convert.ToDecimal(Console.ReadLine());

        Console.WriteLine();
        Console.WriteLine("** Hasil **");
        Console.WriteLine("var1 = " + var1);
        Console.WriteLine("var2 = " + var2);
        Console.WriteLine("var3 = " + var3);
    }
}


bool var1;
bool var2;
var1 = true;
var2 = false;

Console.WriteLine("var1 = " + var1);  // Output: var1 = True
Console.WriteLine("var2 = " + var2);  // Output: var2 = False

bool var1 = 18 < 13;
bool var2 = 26 > 18;
bool var3 = 'A' == 'a';

Console.WriteLine("var1 = " + var1);  // Output: var1 = False
Console.WriteLine("var2 = " + var2);  // Output: var2 = True
Console.WriteLine("var3 = " + var3);  // Output: var3 = False



int var1 = 18;
int var2 = 13;

if (var1 < var2)
{
    Console.WriteLine("var1 lebih kecil daripada var2");
}
else if (var1 > var2)
{
    Console.WriteLine("var1 lebih besar daripada var2");
}
else
{
    Console.WriteLine("var1 sama dengan var2");
}




public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        Console.Write("Masukkan sebuah angka: ");
        int angka = Convert.ToInt32(Console.ReadLine());

        bool isGenap = angka % 2 == 0;

        if (isGenap)
        {
            Console.WriteLine(angka + " adalah angka genap");
        }
        else
        {
            Console.WriteLine(angka + " adalah angka ganjil");
        }
    }
}



char var1 = 'a';
char var2 = 'Z';

Console.WriteLine(var1);  // Output: a
Console.WriteLine(var2);  // Output: Z



char var1 = '5';
char var2 = '$';

Console.WriteLine(var1);  // Output: 5
Console.WriteLine(var2);  // Output: $


char var1 = '\u00B5';
char var2 = '\u00BD';
char var3 = '\u00C6';

Console.WriteLine(var1);  // Output: µ
Console.WriteLine(var2);  // Output: ½
Console.WriteLine(var3);  // Output: Æ



char var1 = '\'';
char var2 = '\n';
char var3 = '\"';

Console.Write(var1);
Console.Write(var2);
Console.Write(var3);



Console.Write("Masukkan sebuah karakter: ");
char var1 = Console.ReadKey().KeyChar;

Console.WriteLine();
Console.WriteLine("Karakter yang dimasukkan: " + var1);



public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        // Deklarasi dan Inisialisasi Variabel
        char var1 = 'a';
        char var2 = 'Z';
        char var3 = '5';
        char var4 = '$';
        char var5 = '\u00B5';
        char var6 = '\u00BD';
        char var7 = '\u00C6';
        char var8 = '\'';
        char var9 = '\n';
        char var10 = '\"';

        // Menampilkan Variabel
        Console.WriteLine(var1);
        Console.WriteLine(var2);
        Console.WriteLine(var3);
        Console.WriteLine(var4);
        Console.WriteLine(var5);
        Console.WriteLine(var6);
        Console.WriteLine(var7);

        // Menampilkan Karakter Khusus
        Console.Write(var8);
        Console.Write(var9);
        Console.Write(var10);

        // Membaca Input Tipe Data char
        Console.WriteLine("Masukkan sebuah karakter: ");
        string input = Console.ReadLine();
        char inputChar = input.Length > 0 ? input[0] : '\0';

        Console.WriteLine("Karakter yang dimasukkan: " + inputChar);
    }
}


string greeting = "Hello";



string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Console.WriteLine("Panjang dari string txt adalah : " + txt.Length);
// Output
Panjang dari string txt adalah : 26


string txt = "Hello World";
Console.WriteLine(txt.ToUpper());   // Output "HELLO WORLD"
Console.WriteLine(txt.ToLower());   // Output "hello world


string firstName = "John ";
string lastName = "Doe";
string name = firstName + lastName;
Console.WriteLine(name); // Output "John Doe"



string firstName = "John ";
string lastName = "Doe";
string name = string.Concat(firstName, lastName);
Console.WriteLine(name); // Output "John Doe"


string firstName = "John";
string lastName = "Doe";
string name = $"My full name is: {firstName} {lastName}";
Console.WriteLine(name); //
// Output
My full name is: John Doe


string myString = "Hello";
Console.WriteLine(myString[0]);  // Output "H"


string myString = "Hello";
Console.WriteLine(myString[1]);  // Output "e"


string myString = "Hello";
Console.WriteLine(myString.IndexOf("e"));  // Output "1"

// Full name
string name = "John Doe";

// Location of the letter D
int charPos = name.IndexOf("D");

// Get last name
string lastName = name.Substring(charPos);

// Print the result
Console.WriteLine(lastName);



// backslash ditambahkan pada double quote didalam sebuah string ( \" ):
string txt = "We are the so-called \"Vikings\" from the north.";

// backslash ditambahkan pada single quote didalam sebuah string (\') :
string txt = "It\'s alright.";

// backslash ditambahkan pada single backslash didalam sebuah string (\\):
string txt = "The character \\ is called backslash.";


int x = 10;
int y = 20;
int z = x + y;  // z akan menjadi 30 (sebuah integer/angka)


string x = "10";
string y = "20";
string z = x + y;  // z akan menjadi 1020 (a string)


string firstName = "Hisbullah";
string lastName = "Akbar";

Console.WriteLine(firstName.ToUpper() + lastName.ToLower());




string firstName = "Hisbullah ";
string lastName = "Akbar";
string name = string.Concat(firstName, lastName[2]);

Console.WriteLine(name);



string nama = "budi";
string pekerjaan = "programmer";
int txtLength = nama.Length + pekerjaan.Length;

string txt = $"Hi {nama}, {pekerjaan} : {txtLength}";

Console.WriteLine(txt);


public class Latihan
{
    public static void Main(string[] args)
    {
        ___ angka = 100;
        Console.WriteLine("Angka: " + ___);
    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        ___ angka1 = 3.14f;
        ___ angka2 = 7.89;
        Console.WriteLine("Float: " + angka1 + ", Double: " + angka2);
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        ___ isGenap = true;
        Console.WriteLine("Apakah angka genap? " + ___);
    }
}




public class Latihan
{
    public static void Main(string[] args)
    {
        int[] nilai = { 10, 20, 30 };
        Console.WriteLine("Nilai ke-1: " + ___);
    }
}




public class Latihan
{
    public static void Main(string[] args)
    {
        string nama = "Budi";
        string pekerjaan = "Programmer";
        Console.WriteLine("Nama: " + ___ + ", Pekerjaan: " + ___);
    }
}



// BAB 4
int angka = 100;
Console.WriteLine("Nilai: " + angka);



int x = 5 + 5;
int y = 10 + x;
int z = x + y;

string kalimat = "Hello " + "World!";
string hasil = greeting + name;


int a = 5;
int b = -a; // b akan bernilai -5
bool c = !true; // c akan bernilai false
int d = ~0b1100; // d akan bernilai bitwise complement dari 0b1100



int a = 10;
int b = 5;
int hasil;

hasil = a + b; // Penambahan
hasil = a - b; // Pengurangan
hasil = a * b; // Perkalian
hasil = a / b; // Pembagian
hasil = a % b; // Modulus



int a = 5;
int b = (a == 5) ? 20 : 30; // b akan bernilai 20



using System;
namespace BelajarCsharp
{

    class ArithmaticOperator
    {
        static void Main(String[] args)
        {
            int angka1;
            int angka2;
            int penjumlahan = 0, pengurangan = 0, perkalian = 0, modulus = 0;
            double pembagian = 0;

            Console.Write("angka1 = ");
            angka1 = int.Parse(Console.ReadLine());
            Console.Write("angka2 = ");
            angka2 = int.Parse(Console.ReadLine());

            penjumlahan = angka1 + angka2;
            Console.WriteLine("{0} + {1} = {2}", angka1, angka2, penjumlahan);

            pengurangan = angka2 - angka1;
            Console.WriteLine("{0} - {1} = {2}", angka1, angka2, pengurangan);

            perkalian = angka1 * angka2;
            Console.WriteLine("{0} x {1} = {2}", angka1, angka2, perkalian);

            pembagian = angka1 / angka2;
            Console.WriteLine("{0} / {1} = {2}", angka1, angka2, pembagian);

            modulus = angka1 % angka2;
            Console.WriteLine("{0} % {1} = {2}", angka1, angka2, modulus);
        }
    }
}


int panjang = 5;
int lebar = 4;
int luas = panjang * lebar;
Console.WriteLine("Luas = {0}", luas);

int panjang = 5;
int lebar = 4;
int luas = panjang x lebar;
Console.WriteLine("Luas = {0}", luas);

int panjang = 5;
int lebar = 4;
int luas = panjang & lebar;
Console.WriteLine("Luas = {0}", luas);


int panjang = 5;
int lebar = 4;
int luas = panjang + lebar;
Console.WriteLine("Luas = {0}", luas);


int panjang = 5;
int lebar = 4;
int luas = panjang / lebar;
Console.WriteLine("Luas = {0}", luas);




class ContohPenuggasan
{
    static void Main(String[] args)
    {
        int angka1, angka2;
        angka1 = angka2 = 5;

        // angka1 = angka1 + angka2
        Console.WriteLine("Nilai angka1 += angka2 = {0}", angka1 += angka2);

        // angka1 = angka1 - angka2
        Console.WriteLine("Nilai angka1 -= angka2 = {0}", angka1 -= angka2);

        // angka1 = angka1 * angka2
        Console.WriteLine("Nilai angka1 *= angka2 = {0}", angka1 *= angka2);

        // angka1 = angka1 / angka2
        Console.WriteLine("Nilai angka1 /= angka2 = {0}", angka1 /= angka2);

        // angka1 = angka1 % angka2
        Console.WriteLine("Nilai angka1 %= angka2 = {0}", angka1 %= angka2);

        // angka1 = angka1 + 1 (increment)
        Console.WriteLine("Nilai angka1++ = {0}", angka1++);

        // angka1 = angka1 - 1 (decrement)
        Console.WriteLine("Nilai angka1-- = {0}", angka1--);
    }
}


public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        int a = 10;
        a++;
        Console.WriteLine("Isi variabel a: " + a);

        int b = 10;
        b--;
        Console.WriteLine("Isi variabel b: " + b);
    }
}



int angka1, angka2, angka3;
angka1 = 4;
angka2 = 3;
angka3 = 2;

Console.WriteLine("Nilai angka1 += angka2 = {0}", angka1 += angka2);
Console.WriteLine("Nilai angka1 -= angka3 = {0}", angka1 -= angka3);
Console.WriteLine("Nilai angka2 *= angka3 = {0}", angka2 *= angka3);
Console.WriteLine("Nilai angka1 /= angka3 = {0}", angka1 /= angka3);


a += 6;


namespace BelajarCsharp
{

    class OperatorPerbandingan
    {
        static void Main(String[] args)
        {
            int angka1, angka2 = 0;

            Console.Write("jumlah angka1 = ");
            angka1 = int.Parse(Console.ReadLine());
            Console.Write("jumlah angka2 = ");
            angka2 = int.Parse(Console.ReadLine());

            Console.WriteLine("Hasil perbandingan: ");
            Console.WriteLine($"angka1 > angka2 : {angka1 > angka2}");
            Console.WriteLine($"angka1 >= angka2 : {angka1 >= angka2}");
            Console.WriteLine($"angka1 < angka2 : {angka1 < angka2}");
            Console.WriteLine($"angka1 <= angka2 : {angka1 <= angka2}");
            Console.WriteLine($"angka1 == angka2 : {angka1 == angka2}");
            Console.WriteLine($"angka1 != angka2 : {angka1 != angka2}");
        }
    }
}




int x = 5, y = 10;
Console.WriteLine($"x != y: {x != y}");


namespace BelajarCsharp
{

    class OperatorLogika
    {
        static void Main(String[] args)
        {
            long jumlahBeliRoti, jumlahBeliSusu;
            long jumlahBeliMinimum = 4;

            Console.Write("jumlah beli roti = ");
            jumlahBeliRoti = int.Parse(Console.ReadLine());
            Console.Write("jumlah beli susu = ");
            jumlahBeliSusu = int.Parse(Console.ReadLine());

            //SYARAT DISKON TOKO 1
            //Jika jumlah roti >= jumlah minimum dan jumlah susu >= jumlah minimum maka dapat diskon
            Console.WriteLine("Diskon Toko 1: "
                + $"{(jumlahBeliRoti >= jumlahBeliMinimum) && (jumlahBeliSusu >= jumlahBeliMinimum)}");

            //SYARAT DISKON TOKO 2
            //Jika jumlah roti >= jumlah minimum atau jumlah susu >= jumlah minimum maka dapat diskon
            Console.WriteLine("Diskon Toko 2: "
                + $"{(jumlahBeliRoti >= jumlahBeliMinimum) || (jumlahBeliSusu >= jumlahBeliMinimum)}");
        }
    }
}



long jumlahBeliRoti = 5, jumlahBeliSusu = 4;
long jumlahBeliMinimum = 4;

// Jika jumlah roti > jumlah minimum dan 
// jumlah susu > jumlah minimum maka dapat diskon
Console.WriteLine("Diskon Toko : " + $"{(jumlahBeliRoti > jumlahBeliMinimum) && (jumlahBeliSusu > jumlahBeliMinimum)}");



int a = 1 + 2 + 3;
int b = 6;
Console.WriteLine(a == b);  // output: True

char c1 = 'a';
char c2 = 'A';
Console.WriteLine(c1 == c2);  // output: False
Console.WriteLine(c1 == char.ToLower(c2));  // output: True



string s1 = "hello!";
string s2 = "HeLLo!";
Console.WriteLine(s1 == s2.ToLower());  // output: True

string s3 = "Hello!";
Console.WriteLine(s1 == s3);  // output: False




int a = 1 + 1 + 2 + 3;
int b = 6;
Console.WriteLine(a != b);  // output: True

string s1 = "Hello";
string s2 = "Hello";
Console.WriteLine(s1 != s2);  // output: False

object o1 = 1;
object o2 = 1;
Console.WriteLine(o1 != o2);  // output: True


string s1 = "Hello";
string s2 = "HELLO";
Console.WriteLine(s1 != s2);



Kondisi? a : b;


public class BelajarCSharp
{
    public static void Main(string[] args)
    {
        int a = 10;
        int b = (a > 5) ? 10 : 20;
        Console.WriteLine("Nilai b: " + b);
    }
}




public class Latihan
{
    public static void Main(string[] args)
    {
        int a = 10, b = 5;
        int hasil = ___ + ___;
        Console.WriteLine("Hasil Penjumlahan: " + hasil);
    }
}




public class Latihan
{
    public static void Main(string[] args)
    {
        int angka = 10;
        ___;
        Console.WriteLine("Angka setelah increment: " + angka);
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        int x = 15, y = 20;
        Console.WriteLine("Apakah x == y? " + (___ == ___));
    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        bool kondisi1 = true, kondisi2 = false;
        Console.WriteLine("Apakah kedua kondisi benar? " + (___ && ___));
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        int angka = -5;
        string hasil = (angka > 0) ? "Positif" : ___;
        Console.WriteLine("Angka tersebut adalah: " + hasil);
    }
}




// BAB 5
(Pilkom == "Pendidikan Komputer")


class Program
{
    public static void Main()
    {
        string pilkom = "Pendidikan Komputer";

        // Kondisi
        if (pilkom == "Pendidikan Komputer")
        {
            // Aksi
            Console.WriteLine("Selamat datang di program Pendidikan Komputer!");
            Console.WriteLine("Ini adalah aksi yang dijalankan ketika kondisi terpenuhi.");
        }
    }
}


namespace SkilvulLearning
{

    class StatemenIf
    {
        static void Main(String[] args)
        {
            if (true)
            {
                Console.WriteLine("baris ini dicetak");
            }

            if (false)
            {
                Console.WriteLine("baris ini tidak dicetak");
            }
        }
    }
}

namespace BelajarCsharp
{

    class StatemenIf
    {
        static void Main(String[] args)
        {
            int nilai;
            nilai = int.Parse(Console.ReadLine());
            if (nilai > 5)
            {
                Console.WriteLine("nilai lebih dari 5");
            }
        }
    }
}


if (5 + 4 == 9)
{
    Console.WriteLine("Benar");
}


if (3 * 3 != 9)
{
    Console.WriteLine("Benar");
}


if (kondisi)
{
    // statement
}
else
{
    // statement
}



public class Program
{
    public static void Main()
    {
        int nilai = 75;

        if (nilai < 60)
        {
            Console.WriteLine("Nilai Kamu C");
        }
        else if (nilai < 80)
        {
            Console.WriteLine("Nilai kamu B");
        }
        else
        {
            Console.WriteLine("Nilai kamu A");
        }
    }
}


string jenisHewan = "Kucing";

if ( . . . . . )
{
    Console.WriteLine("diberikan makan ikan");
}
else
{
    Console.WriteLine("diberikan makan sayur");
}

if (kondisi)
{
    // statement
}




public class Program
{
    public static void Main()
    {
        int nilai = 100;

        if (nilai >= 50)
        {
            Console.WriteLine("Kamu Berhasil");

            if (nilai == 100)
            {
                Console.WriteLine("Kamu Keren");
            }
        }

        else
        {
            Console.WriteLine("Kamu Gagal");
        }

    }
}



using System;
					
public class Program
{
	public static void Main()
	{
		int umur = 18;
		string jenisKelamin = "Laki - Laki";
		
		if (jenisKelamin == "Laki - Laki") {
			if(umur >= 18) {
				Console.WriteLine("Bekerja");
			}
			else {
				Console.WriteLine("Bermain Bola");
			}
		}
		else {
			if (umur >= 18) {
				Console.WriteLine("Bekerja");
			}
			else {
				Console.WriteLine("Bermain Boneka");
			}
		}
	}
}


if (kondisi)
    statement;
else if (kondisi)
    statement;
else if (kondisi)
    statement;
. . .
else
    statement;



class StatemenIf
{
    static void Main(String[] args)
    {
        int angka = 4;

        if ((angka % 2) == 0)
        {
            Console.WriteLine("Faktor terkecil dari " + angka + " adalah 2.");
        }
        else if ((angka % 3) == 0)
        {
            Console.WriteLine("Faktor terkecil dari " + angka + " adalah 3.");
        }
        else if ((angka % 5) == 0)
        {
            Console.WriteLine("Faktor terkecil dari " + angka + " adalah 5.");
        }
        else if ((angka % 7) == 0)
        {
            Console.WriteLine("Faktor terkecil dari " + angka + " adalah 7.");
        }
        else
        {
            Console.WriteLine(angka + " tidak bisa dibagi 2, 3, 5, atau 7.");
        }
    }
}



switch (ekspresi)
{
    case konstanta1:
        runtun statemen;
        break;
    case konstanta2:
        runtun statemen;
        break;
    case konstanta3:
        runtun statemen;
        break;
    . . .
  default:
        runtun statemen;
        break;
}




class StatemenSwitch
{
    static void Main(String[] args)
    {
        Console.WriteLine("1. Utara");
        Console.WriteLine("2. Timur");
        Console.WriteLine("3. Barat");
        Console.WriteLine("4. Selatan");
        Console.WriteLine("Ke mana anda akan pergi?");
        int arah = int.Parse(Console.ReadLine());

        switch (arah)
        {
            case 1: Console.WriteLine("Tampak sebuah danau"); break;
            case 2: Console.WriteLine("Tampak sebuah hutan"); break;
            case 3: Console.WriteLine("Tampak sebuah padang rumput"); break;
            case 4: Console.WriteLine("Tampak sebuah gurun"); break;
            default: Console.WriteLine("Arah tidak benar"); break;
        }
        Console.ReadKey();
    }
}






class StatemenSwitch
{
    static void Main(String[] args)
    {
        Console.WriteLine("1. Utara");
        Console.WriteLine("2. Timur");
        Console.WriteLine("3. Barat");
        Console.WriteLine("4. Selatan");
        Console.WriteLine("Ke mana anda akan pergi?");
        int arah = int.Parse(Console.ReadLine());

        switch (arah)
        {
            case 1: Console.WriteLine("Tampak sebuah danau"); break;
            case 2: Console.WriteLine("Tampak sebuah hutan"); break;
            case 3: Console.WriteLine("Tampak sebuah padang rumput"); break;
            case 4: Console.WriteLine("Tampak sebuah gurun"); break;
            default: Console.WriteLine("Arah tidak benar"); break;
        }
        Console.ReadKey();
    }
}



class StatemenSwitch
{
    static void Main(String[] args)
    {

        Console.Write("Jenis Kendaraan : ");
        string kendaraan = Console.ReadLine();

        Console.Write("Jenis Area : ");
        string area = Console.ReadLine();

        switch (kendaraan)
        {
            case "Mobil":
                Console.WriteLine("Kendaraan Mobil");
                switch (area)
                {
                    case "Jalan Raya":
                        Console.WriteLine("Area Cocok");
                        break;
                    case "Tanah":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                    case "Air":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                }
                break;
            case "Truk":
                Console.WriteLine("Kendaraan Motor");
                switch (area)
                {
                    case "Jalan Raya":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                    case "Tanah":
                        Console.WriteLine("Area Cocok");
                        break;
                    case "Air":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                }
                break;
            case "Kapal":
                Console.WriteLine("Kendaraan Kapal");
                switch (area)
                {
                    case "Jalan Raya":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                    case "Tanah":
                        Console.WriteLine("Area Tidak Cocok");
                        break;
                    case "Air":
                        Console.WriteLine("Area Cocok");
                        break;
                }
                break;
            default:
                Console.WriteLine("Kendaraan Tidak Terdeteksi");
                break;
        }
    }
}








    using System;

class StatemenSwitch
{
    static void Main(string[] args)
    {
        Console.Write("Jenis Kendaraan: ");
        string kendaraan = Console.ReadLine();

        Console.Write("Jenis Area: ");
        string area = Console.ReadLine();

        switch (kendaraan)
        {
            case "Mobil":
                Console.WriteLine("Kendaraan Mobil");
                Console.WriteLine(area == "Jalan Raya" ? "Area Cocok" : "Area Tidak Cocok");
                break;
            case "Truk":
                Console.WriteLine("Kendaraan Truk");
                Console.WriteLine(area == "Tanah" ? "Area Cocok" : "Area Tidak Cocok");
                break;
            case "Kapal":
                Console.WriteLine("Kendaraan Kapal");
                Console.WriteLine(area == "Air" ? "Area Cocok" : "Area Tidak Cocok");
                break;
            default:
                Console.WriteLine("Kendaraan Tidak Terdeteksi");
                break;
        }
    }
}





string role = Console.ReadLine();

switch (role)
{
    case "Knight": Console.WriteLine("Serangan Langsung"); break;
    case "Archer": Console.WriteLine("Serangan Ranged Attack"); break;
    case "Mage": Console.WriteLine("Serangan AOE"); break;
    default: Console.WriteLine("Serangan Tidak Diketahui"); break;
}



for (inisialisasi; kondisi; iterasi)
{
    runtun statemen;
}



for (int i = 0; i < 10; i++)
{
    Console.WriteLine("hello");
}


for (int i = 1; i <= 15; i++)
{
    Console.WriteLine(i);
}


for (int i = 15; i >= 1; i--)
{
    Console.WriteLine(i);
}


for (int i = 1; i <= 20; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine(i);
    }
}


for (int hitung = 10; hitung < 5; hitung++)
{
    Console.WriteLine(hitung); // statemen ini tidak akan pernah dieksekusi
}


A
for (int i = 1; i <= 11; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine(i);
    }
}


B
for (int i = 1; i <= 11; i++)
{
    if (i % 2 != 0)
    {
        Console.WriteLine(i);
    }
}

C
for (int i = 1; i < 11; i++)
{
    if (i % 2 != 0)
    {
        Console.WriteLine(i);
    }
}

D
for (int i = 0; i < 11; i += 2)
{
    Console.WriteLine(i + 1);
}



E
for (int i = 1; i < 12; i += 2)
{
    Console.WriteLine(i);
}


class Koma
{
    static void Main()
    {
        int i, j;

        for (i = 0, j = 10; i < j; i++, j--)
        {
            Console.WriteLine("i dan j: " + i + " " + j);
        }
    }
}


class DemoFor
{
    static void Main()
    {
        int i, j;
        bool selesai = false;

        for (i = 0, j = 100; !selesai; i++, j--)
        {
            if (i * i >= j)
            {
                selesai = true;
            }
            Console.WriteLine("i, j : " + i + " " + j);
        }
    }
}



class Kosong
{
    static void Main()
    {
        int i;

        for (i = 0; i < 10;)
        {
            Console.WriteLine("Lewat #" + i);
            i++; // inkremen variabel kendali perulangan
        }
    }
}



class Kosong
{
    static void Main()
    {
        int i;
        i = 0; // menempatkan inisialisasi di luar loop

        for (; i < 10;)
        {
            Console.WriteLine("Lewat #" + i);
            i++; // inkremen variabel kendali perulangan
        }
    }
}


for (; ; )
{
    // runtun statemen . . .
}



while (kondisi)
{
    runtun statemen;
}


class DemoWhile
{
    static void Main()
    {
        int angka;
        int jumlahDigit;

        angka = 43567424;
        jumlahDigit = 0;

        Console.WriteLine(“Angka: “ +angka);
        while (angka > 0)
        {
            jumlahDigit++;
            angka = angka / 10;
        }

        Console.WriteLine(“Jumlah Digit: “ +jumlahDigit);
    }
}



inisialisasi;
while (kondisi)
{
    runtun statemen;
    iterasi;
}


using System;

class ProgramInput
{
    static void Main(String[] args)
    {

        Console.WriteLine("Balapan akan dimulai dalam...");
        int hitung = 10;
        while (hitung > 0)
        {
            Console.WriteLine(hitung + "...");
            hitung--;
        }
        Console.WriteLine("MULAI!!!");
        Console.ReadKey();
    }
}


do
{
    runtun statemen;
} while (kondisi);



class DemoDoWhile
{
    static void Main()
    {
        int angka;
        int digitBerikutnya;
        angka = 198;

        Console.WriteLine(“Angka: “ +angka);
        Console.Write(“Angka dalam urutan terbalik: “);

        do
        {
            digitBerikutnya = angka % 10;
            Console.Write(digitBerikutnya);
            angka = angka / 10;
        } while (angka > 0);

        Console.WriteLine();
    }
}






{
   public class Program
{
    public static void Main(string[] args)
    {
        for (int i = 0; i <= 10; i++)
        {
            if (i == 4)
                break;

            Console.WriteLine("Nilai dari i adalah : {0}", i);
        }
        Console.WriteLine("Keluar dari Program ?");
    }
}
} 




{
   public class Program
{
    public static void Main(string[] args)
    {
        for (int i = 0; i <= 10; i++)
        {
            if (i == 4)
                continue;

            Console.WriteLine("Nilai dari i adalah : {0}", i);
        }
        Console.WriteLine("Keluar dari Program ?");
    }
}
}



int increment = 0;
while (true)
{
    increment++;
    if (increment % 2 == 0)
        continue;

    if (increment > 10)
        break;
    else
        Console.WriteLine(increment);
}



for (inisialisasi; kondisi; iterasi)
{
    for (inisialisasi; kondisi; iterasi)
    {
        runtun statemen;
    }
}


class NestedLoopFor
{

    public static void Main()
    {

        // perulangan for didalam perulangan for lainnya
        for (int i = 0; i < 2; i++)
        {
            for (int j = 0; j < 2; j++)
            {
                Console.WriteLine(i + " " + j);
            }
        }
    }
}



while (kondisi)
{
    runtun statemen;

    while (kondisi)
    {
        runtun statemen;
    }
}



class NestedLoopWhile
{

    public static void Main()
    {
        int x, y;
        x = 0;
        while (x < 2)
        {
            Console.WriteLine("Perulangan Luar = {0}", x);
            x++;

            y = 0;
            while (y < 2)
            {
                Console.WriteLine("Perulangan Dalam = {0}", y);
                y++;
            }
        }
    }
}


do
{
    runtun statemen;

    do
    {
        runtun statemen;
    } while (kondisi);
} while (kondisi);




class NestedLoopDoWhile
{

    public static void Main()
    {
        int x = 0;
        do
        {
            Console.WriteLine("Perulangan Luar = {0}", x);
            int y = 0;
            x++;

            do
            {
                Console.WriteLine("Perulangan Dalam = {0}", y);
                y++;
            } while (y < 2);

        } while (x < 2);
    }
}



for (int i = 0; i < 2; i++)
{
    for (int j = 0; j < 1; j++)
    {
        Console.WriteLine($"{i}, {j}");
    }
}


public class Latihan
{
    public static void Main(string[] args)
    {
        int nilai = 65;
        if (    ___     >       ___   )
        {
            Console.WriteLine("Nilai Memadai");
        }
    }
}




public class Latihan
{
    public static void Main(string[] args)
    {
        for (int i =    ___     ; ___   ; i++)
        {
            Console.WriteLine(i);
        }
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        for (int i = 0; i < 10; i++)
        {
            if (    ___     ==   ___    )
            {
                break;
            }
            Console.WriteLine(i);
        }
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        for (int i = 0; i <= 5; i++)
        {
            if (    ___     % 2 != 0)
            {
                continue;
            }
            Console.WriteLine(i);
        }
    }
}



public class Latihan
{
    public static void Main(string[] args)
    {
        Console.Write("Masukkan jenis hewan: ");
        string jenisHewan = Console.ReadLine();

        switch (    ___     )
        {
            case "Kucing":
                Console.WriteLine("Makanan: Ikan");
                break;
            case "Kelinci":
                Console.WriteLine("Makanan: Wortel");
                break;
            ___:
                Console.WriteLine("Makanan: Tidak diketahui");
                break;
        }
    }
}


[Access modifier][tipe data][nama method](parameter1, parameter2, ...) {
    // Statements
}




class MenggunakanMethod
{
    static void Main(string[] args)
    {
        HitungTampilkanHasil();
        HitungTampilkanHasil();
        HitungTampilkanHasil();
    }

    static void HitungTampilkanHasil()
    {
        Console.WriteLine(20 + 26);
    }
}



static void HitungTampilkanHasil()
{
    Console.WriteLine(10 + 20);
}



static void Main(string[] args)
{
    HitungTampilkanHasil();
    HitungTampilkanHasil();
    HitungTampilkanHasil();
}



static void Main(string[] args)
{
    Console.WriteLine(PenjumlahanTigaAngka());
}

static int PenjumlahanTigaAngka()
{
    int angka1 = 3, angka2 = 4, angka3 = 5;
    int hasil = angka1 + angka2 + angka3;

    return hasil;
}


int PenjumlahanTigaAngka()



int hasil = angka1 + angka2 + angka3;

return hasil;




static int PenjumlahanTigaAngka()
{
    int angka1 = 3, angka2 = 4, angka3 = 5;
    return angka1 + angka2 + angka3;
}


static int PenjumlahanTigaAngka() => angka1 + angka2 + angka3;



[nama method][access modifier][tipe data](parameter1, parameter2, ...) {
    // Statements
}```





static void MencetakAngka()
{
    for (int i = 1; i <= 3; i++)
    {
        Console.Write(i + " ");
    }
}

static void Main(string[] args)
{
    MencetakAngka();
    Console.WriteLine();
    MencetakAngka();
}


void test(string nama)
{
    Console.WriteLine(nama);
}



class MenggunakanParameterMethod
{
    static void Main(string[] args)
    {
        test("CsharpLearn");
    }

    static void test(string nama)
    {
        Console.WriteLine(nama);
    }
}
}





class MenggunakanParameterMethod
{
    static void Main(string[] args)
    {
        Console.Write("Panjang : ");
        int panjang = Convert.ToInt32(Console.ReadLine());
        Console.Write("Lebar : ");
        int lebar = Convert.ToInt32(Console.ReadLine());

        int luasPersegiPanjang = hitungLuasPersegiPanjang(panjang, lebar);
        Console.WriteLine("Luas Persegi Panjang : " + luasPersegiPanjang);
    }

    static int hitungLuasPersegiPanjang(int panjang, int lebar)
    {
        return panjang * lebar;
    }
}






static void Main(string[] args)
{
    int angka = 6;
    int hasilAngka = hitungKurangTiga(
        hitungKaliDua(
            hitungTambahLima(angka)
            )
        );

    Console.WriteLine("Hasil akhir angka : " + hasilAngka);
}

static int hitungTambahLima(int angka)
{
    return angka + 5;
}

static int hitungKaliDua(int angka)
{
    return angka * 2;
}
static int hitungKurangTiga(int angka)
{
    return angka - 3;
}



static void Main(string[] args)
{
    if (perbandingan())
    {
        Console.WriteLine("A lebih besar dari B");
    }
    else
    {
        Console.WriteLine("A lebih kecil atau sama dengan B");
    }
}

static int A()
{
    return 10;
}

static int B()
{
    return 5 + 5;
}

static bool perbandingan()
{
    return A() > B();
}



public static void TampilkanPesan()
{
    Console.WriteLine("Selamat belajar C#!");
}

public static void Main()
{
    _________();
}



public static int HitungLuas(   ________   , ________  )
{
    return panjang * lebar;
}




public static int Tambah(int a, int b)
{
    return a + b;
}

public static void Main()
{
    Console.WriteLine(Tambah(   ____    ,     ____   ));
}





public static void Sapa(    ________    nama)
{
    Console.WriteLine("Halo, " + nama + "!");
}

public static void Main()
{
    Sapa("Sopia");
}



public static int HitungPerkalian(int x, int y) =>   _________    ;



[Access modifier][tipe data][nama method](parameter1, parameter2, ...) {
    // Statements
}


int a = 5;
int b = 2;
Console.WriteLine(a % b);
