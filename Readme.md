# CodeceptJS PoC Tests

This repository contains Proof-of-Concept (PoC) tests written with CodeceptJS for example web scenarios covering sites like Letgo, IslamicFinder and Doa Kozmetik.

## Contents
- Overview
- Prerequisites
- Installation
- Configuration
- Running Tests
- File Structure

## Prerequisites
- Node.js and npm (e.g. Node 14+)
- Java (JDK or JRE) — required for Selenium Standalone. Check: `java -version`
- Browser driver (Chrome/Gecko) or WebDriver setup depending on your `codecept.conf.js` configuration

Check installed versions:

```bash
node -v
npm -v
java -version
```

## Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd CodeceptJS_PoC_Tests
npm install
```

Open the project in Visual Studio Code and open a new terminal.
Run these commands in the terminal:

```bash
npm init -y  // Initialize the project
npm install codeceptjs --save-dev  // Install CodeceptJS
npx codeceptjs init  // Initialize CodeceptJS configuration
npm install selenium-standalone --save-dev
npx selenium-standalone install  // Download Selenium server
npx selenium-standalone start  // Start Selenium server
```

Open a new terminal (don't close the former terminal) and run this code:

```bash
npx codeceptjs run <testdocumentname>
```

## Configuration
- The main configuration file is `codecept.conf.js`. Configure env, browser and reporting there.
- Tests are located in the `tests/` folder (e.g. `tests/letgoTests.js`).
- Test outputs (screenshots, reports) are written to the `output/` folder.


## Running Tests

Run all tests with steps:

```bash
npx codeceptjs run --steps
```

Run a specific test file:

```bash
npx codeceptjs run tests/letgoTests.js --steps
```

Run a specific test scenario in a specific test file:

```bash
npx codeceptjs run tests/letgoTests.js --grep "@letgoSearch" 
```

Add `--verbose` or `--debug` for more detailed logs.

## File Structure (Summary)
- `codecept.conf.js` — CodeceptJS configuration
- `tests/` — Test files (e.g. `letgoTests.js`)
- `steps_file.js`, `steps.d.ts` — step definitions / types
- `output/` — test run outputs (screenshots, reports)



<!-- Türkçe -->

# CodeceptJS PoC Tests

Bu depo, Letgo, IslamicFinder ve Doa Kozmetik gibi örnek web senaryoları için oluşturulmuş CodeceptJS Proof-of-Concept (PoC) testlerini içerir.

## İçindekiler
- Açıklama
- Önkoşullar
- Kurulum
- Konfigürasyon
- Testleri Çalıştırma
- Dosya Yapısı

## Ön Koşullar
- Node.js ve npm (örn. Node 14+)
- Java (JDK veya JRE) — Selenium Standalone için gerekli. Kontrol: `java -version`
- Tarayıcı sürücüsü (Chrome/Gecko) veya ilgili WebDriver kurulumu (projenizdeki `codecept.conf.js`'e göre).

Mevcut bağımlılıkları kontrol etmek için:

```bash
node -v
npm -v
java -version
```

## Kurulum

Projeyi klonlayın ve bağımlılıkları yükleyin:

```bash
git clone <repo-url>
cd CodeceptJS_PoC_Tests
npm install
```

Projeyi Visual Studio Code'da açın ve terminali açın.
Terminalde şu komutları çalıştırın:

```bash
npm init -y  // Projeyi başlatır
npm install codeceptjs --save-dev  // CodeceptJS kur
npx codeceptjs init  // Proje yapılandırmasını başlat
npm install selenium-standalone --save-dev
npx selenium-standalone install  // Selenium sunucusunu indir
npx selenium-standalone start  // Selenium sunucusunu başlat
```

Yeni bir terminal açın (önceki terminali kapatmayın) ve şu kodu çalıştırın:

```bash
npx codeceptjs run <testdosyaadi>
```

## Konfigürasyon
- Test yapılandırması ana dosya `codecept.conf.js` içindedir. Buradan test ortamı, tarayıcı ve raporlama seçeneklerini özelleştirebilirsiniz.
- Testler `tests/` klasöründe yer alır (ör. `tests/letgoTests.js`).
- Test çıktıları `output/` klasörüne yazılır.

## Testleri Çalıştırma

Tüm testleri çalıştırmak için:

```bash
npx codeceptjs run --steps
```

Belirli bir testi çalıştırmak için (dosya bazlı):

```bash
npx codeceptjs run tests/letgoTests.js --steps
```

Belirli bir testin içindeki belirli bir senaryoyu çalıştırmak için (dosya bazlı):

```bash
npx codeceptjs run tests/letgoTests.js --grep "@senaryoAdi" 
```

Kısa seçenekler ve hata ayıklama için `--verbose` veya `--debug` ekleyebilirsiniz.

## Dosya Yapısı (Özet)
- `codecept.conf.js` — CodeceptJS yapılandırması
- `tests/` — Test dosyaları (ör. `letgoTests.js`)
- `steps_file.js`, `steps.d.ts` — adım tanımları / tipler
- `output/` — test çalıştırma çıktıları (screenshots, raporlar)