Chạy backend :
+cd backend
+npm run dev
+backend chạy cổng 3000
Chạy frontend:
+cd frontend
+npm start
+frontend cx chạy cùng cổng 3000 lên khi nó gợi ý chạy cổng khác ấn y rồi enter để frontend chạy cổng 3001
Cơ sở dữ liệu
CREATE DATABASE corporate_project_management;
SHOW DATABASES;
USE corporate_project_management;

-- Bảng AppRoles
CREATE TABLE AppRoles (
    AppRoleID INT AUTO_INCREMENT PRIMARY KEY,
    AppRoleName VARCHAR(20),
    Description TEXT
);
INSERT INTO AppRoles (AppRoleName, Description) VALUES
('Admin', 'Quản trị viên hệ thống, có quyền quản lý toàn bộ hệ thống.'),
('Manager', 'Quản lý dự án, chịu trách nhiệm giám sát và điều phối công việc trong dự án.'),
('Employee', 'Nhân viên thực hiện các nhiệm vụ được giao trong dự án.');
-- Bảng Users
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(50),
    Password VARCHAR(255),
    Email VARCHAR(50),
    Phone CHAR(10),
    AppRoleID INT,
    CreateAt DATE,
    FullName VARCHAR(100),
    Address VARCHAR(255),
    FOREIGN KEY (AppRoleID) REFERENCES AppRoles(AppRoleID)
);
-- Bảng ContractRoles
CREATE TABLE ContractRoles (
    ContractRoleID INT AUTO_INCREMENT PRIMARY KEY,
    ContractRoleName VARCHAR(20),
    Description TEXT
);

-- Bảng Accounts
CREATE TABLE Accounts (
    AccountID INT AUTO_INCREMENT PRIMARY KEY,
    Company VARCHAR(100),
    Deputy VARCHAR(50),
    Email VARCHAR(50),
    Phone VARCHAR(50),
    WebLink VARCHAR(50),
    Address TEXT
);

-- Bảng Projects
CREATE TABLE Projects (
    ProjectID INT AUTO_INCREMENT PRIMARY KEY,
    ProjectName VARCHAR(30),
    Description TEXT,
    AccountID INT,
    StartDate DATE,
    EndDate DATE,
    Track ENUM('Planning', 'InProgress', 'OnHold', 'Cancelled', 'Completed', 'Overdue'),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

-- Bảng Contracts
CREATE TABLE Contracts (
    ContractID INT AUTO_INCREMENT PRIMARY KEY,
    ContractCode VARCHAR(50),
    Title VARCHAR(100),
    ProjectID INT,
    SignDate DATE,
    StartDate DATE,
    EndDate DATE,
    Status ENUM('Draft', 'WaitingForApproval', 'Signed', 'InEffect', 'Terminated', 'Expired', 'Cancelled'),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);

-- Bảng ContractStaffs (không cần AUTO_INCREMENT vì là khóa chính tổng hợp)
CREATE TABLE ContractStaffs (
    ContractID INT,
    UserID INT,
    ContractRoleID INT,
    AssignedAt DATE,
    PRIMARY KEY (ContractID, UserID),
    FOREIGN KEY (ContractID) REFERENCES Contracts(ContractID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ContractRoleID) REFERENCES ContractRoles(ContractRoleID)
);

-- Bảng ContractFiles
CREATE TABLE ContractFiles (
    FileID INT AUTO_INCREMENT PRIMARY KEY,
    ContractID INT,
    FileName VARCHAR(100),
    FilePath VARCHAR(100),
    UploadDate DATE,
    UploadBy INT,
    FileType VARCHAR(10),
    FOREIGN KEY (ContractID) REFERENCES Contracts(ContractID),
    FOREIGN KEY (UploadBy) REFERENCES Users(UserID)
);

-- Bảng ContractLogs
CREATE TABLE ContractLogs (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    ContractID INT,
    Action VARCHAR(50),
    ActionBy INT,
    ActionDate DATETIME,
    Note TEXT,
    FOREIGN KEY (ContractID) REFERENCES Contracts(ContractID),
    FOREIGN KEY (ActionBy) REFERENCES Users(UserID)
);


