/* 四柱推命鑑定サイト メインスクリプト */

let calculator;

// ページ読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', function() {
    calculator = new FourPillarsCalculator();
    
    // フォーム送信イベント
    const form = document.getElementById('fourPillarsForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // 今日の日付をデフォルト値に設定
    setDefaultDate();
    
    // URLパラメータをチェックして自動鑑定
    checkUrlParameters();
});

// デフォルト日付を設定
function setDefaultDate() {
    const today = new Date();
    const dateInput = document.getElementById('birthDate');
    if (dateInput) {
        dateInput.value = today.toISOString().split('T')[0];
    }
    
    const timeInput = document.getElementById('birthTime');
    if (timeInput) {
        timeInput.value = '12:00';
    }
}

// フォーム送信処理
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const birthDate = formData.get('birthDate');
    const birthTime = formData.get('birthTime');
    const gender = formData.get('gender');
    const birthPlace = formData.get('birthPlace') || '不明';
    
    if (!name || !birthDate || !birthTime || !gender) {
        alert('必須項目をすべて入力してください。');
        return;
    }
    
    // 四柱を計算
    const fourPillars = calculator.calculateFourPillars(birthDate, birthTime);
    const bigLuck = calculator.calculateBigLuck(fourPillars, gender);
    
    // 結果を表示
    displayResults(name, birthDate, birthTime, gender, birthPlace, fourPillars, bigLuck);
}

// 結果表示
function displayResults(name, birthDate, birthTime, gender, birthPlace, fourPillars, bigLuck) {
    // 入力セクションを非表示
    const inputSection = document.querySelector('.input-section');
    if (inputSection) {
        inputSection.style.display = 'none';
    }
    
    // 結果セクションを表示
    const resultSection = document.getElementById('resultSection');
    if (resultSection) {
        resultSection.style.display = 'block';
    }
    
    // 基本情報を表示
    displayBasicInfo(name, birthDate, birthTime, gender, birthPlace);
    
    // 命式を表示
    displayFourPillars(fourPillars);
    
    // 大運を表示
    displayBigLuck(bigLuck);
    
    // 特殊情報を表示
    displaySpecialInfo(fourPillars);
}

// 基本情報表示
function displayBasicInfo(name, birthDate, birthTime, gender, birthPlace) {
    const personName = document.getElementById('personName');
    const birthInfo = document.getElementById('birthInfo');
    
    if (personName) {
        personName.textContent = `${name}さんの命式`;
    }
    
    if (birthInfo) {
        const dateObj = new Date(birthDate);
        const formattedDate = `${dateObj.getFullYear()}年${(dateObj.getMonth() + 1)}月${dateObj.getDate()}日`;
        const formattedTime = birthTime.replace(':', '時') + '分';
        const genderText = gender === 'male' ? '男性' : '女性';
        
        birthInfo.textContent = `生年月日：${formattedDate} ${formattedTime} 性別：${genderText} 出生地：${birthPlace}`;
    }
}

// 四柱表示
function displayFourPillars(fourPillars) {
    const heavenlyStemsRow = document.getElementById('heavenlyStems');
    const earthlyBranchesRow = document.getElementById('earthlyBranches');
    const hiddenStemsRow = document.getElementById('hiddenStems');
    const transformationStarsRow = document.getElementById('transformationStars');
    const lifeStagesRow = document.getElementById('lifeStages');
    
    if (heavenlyStemsRow) {
        heavenlyStemsRow.innerHTML = `
            <td>${fourPillars.hour.charAt(0)}</td>
            <td>${fourPillars.day.charAt(0)}</td>
            <td>${fourPillars.month.charAt(0)}</td>
            <td>${fourPillars.year.charAt(0)}</td>
        `;
    }
    
    if (earthlyBranchesRow) {
        earthlyBranchesRow.innerHTML = `
            <td>${fourPillars.hour.charAt(1)}</td>
            <td>${fourPillars.day.charAt(1)}</td>
            <td>${fourPillars.month.charAt(1)}</td>
            <td>${fourPillars.year.charAt(1)}</td>
        `;
    }
    
    // 蔵干を表示
    if (hiddenStemsRow) {
        const hiddenHtml = Object.values(fourPillars).map(pillar => {
            const branch = pillar.charAt(1);
            const hiddenStems = HIDDEN_STEMS[branch] || [];
            return `<td>${hiddenStems.join('、')}</td>`;
        }).join('');
        hiddenStemsRow.innerHTML = hiddenHtml;
    }
    
    // 通変星を表示（簡易版）
    if (transformationStarsRow) {
        const dayStem = fourPillars.day.charAt(0);
        const transformationHtml = Object.values(fourPillars).map(pillar => {
            const stem = pillar.charAt(0);
            const star = calculator.calculateTransformationStars(dayStem, stem);
            return `<td>${star}</td>`;
        }).join('');
        transformationStarsRow.innerHTML = transformationHtml;
    }
    
    // 十二運星を表示
    if (lifeStagesRow) {
        const lifeStageHtml = Object.values(fourPillars).map(pillar => {
            const stem = pillar.charAt(0);
            const branch = pillar.charAt(1);
            const stage = calculator.calculateLifeStage(stem, branch);
            return `<td>${stage}</td>`;
        }).join('');
        lifeStagesRow.innerHTML = lifeStageHtml;
    }
}

// 大運表示
function displayBigLuck(bigLuck) {
    const bigLuckBody = document.getElementById('bigLuckBody');
    if (!bigLuckBody) return;
    
    bigLuckBody.innerHTML = '';
    
    bigLuck.forEach(luck => {
        const row = document.createElement('tr');
        const relation = luck.isTenchu ? '大運天中殺' : '';
        
        row.innerHTML = `
            <td>${luck.age}歳</td>
            <td>${luck.pillar}</td>
            <td>${luck.transformationStar}</td>
            <td>${luck.lifeStage}</td>
            <td>${relation}</td>
        `;
        
        bigLuckBody.appendChild(row);
    });
}

// 特殊情報表示
function displaySpecialInfo(fourPillars) {
    const tenchuStatus = document.getElementById('tenchuStatus');
    const monthlyKillStatus = document.getElementById('monthlyKillStatus');
    
    // 天中殺チェック
    const hasTenchuYear = calculator.checkTenchuKilling(fourPillars.year);
    const hasTenchuMonth = calculator.checkTenchuKilling(fourPillars.month);
    const hasTenchuDay = calculator.checkTenchuKilling(fourPillars.day);
    const hasTenchuHour = calculator.checkTenchuKilling(fourPillars.hour);
    
    if (tenchuStatus) {
        const tenchuPillars = [];
        if (hasTenchuYear) tenchuPillars.push('年柱');
        if (hasTenchuMonth) tenchuPillars.push('月柱');
        if (hasTenchuDay) tenchuPillars.push('日柱');
        if (hasTenchuHour) tenchuPillars.push('時柱');
        
        tenchuStatus.textContent = tenchuPillars.length > 0 ? 
            `${tenchuPillars.join('、')}にあります。` : 'ありません。';
    }
    
    // 生月中殺（簡易版）
    if (monthlyKillStatus) {
        monthlyKillStatus.textContent = 'あります。'; // 簡易的に固定表示
    }
}

// フォームをリセット
function resetForm() {
    const inputSection = document.querySelector('.input-section');
    const resultSection = document.getElementById('resultSection');
    const form = document.getElementById('fourPillarsForm');
    
    if (inputSection) {
        inputSection.style.display = 'block';
    }
    
    if (resultSection) {
        resultSection.style.display = 'none';
    }
    
    if (form) {
        form.reset();
        setDefaultDate();
    }
    
    // ページトップにスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// URLパラメータをチェックして自動鑑定
function checkUrlParameters() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        
        const name = urlParams.get('name');
        const birthDate = urlParams.get('birthDate');
        const birthTime = urlParams.get('birthTime');
        const gender = urlParams.get('gender');
        const birthPlace = urlParams.get('birthPlace') || '不明';
        
        // URLパラメータをフォームに設定
        if (name && document.getElementById('name')) document.getElementById('name').value = decodeURIComponent(name);
        if (birthDate && document.getElementById('birthDate')) document.getElementById('birthDate').value = birthDate;
        if (birthTime && document.getElementById('birthTime')) document.getElementById('birthTime').value = birthTime;
        if (gender && document.getElementById('gender')) document.getElementById('gender').value = gender;
        if (birthPlace && document.getElementById('birthPlace')) document.getElementById('birthPlace').value = decodeURIComponent(birthPlace);
        
        if (name && birthDate && birthTime && gender) {
            // URLパラメータが存在する場合は自動的に鑑定を実行
            const fourPillars = calculator.calculateFourPillars(birthDate, birthTime);
            const bigLuck = calculator.calculateBigLuck(fourPillars, gender);
            
            // 結果を表示
            displayResults(name, birthDate, birthTime, gender, birthPlace, fourPillars, bigLuck);
        }
    } catch (error) {
        console.error('URLパラメータ処理エラー:', error);
    }
}