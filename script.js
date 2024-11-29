// Timer
const startDate = new Date("2024-08-01"); // Data do namoro
function updateTimer() {
    const now = new Date();

    // Cálculo dos anos, meses e dias
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajuste para casos em que os dias resultam negativos
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Último dia do mês anterior
        days += previousMonth.getDate();
    }

    // Ajuste para casos em que os meses resultam negativos
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Cálculo das horas, minutos e segundos restantes
    const diff = now - new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("contador").innerText = `
        ${years} anos, ${months} meses, ${days} dias,
        ${hours}h ${minutes}m ${seconds}s
    `;
}

setInterval(updateTimer, 1000);
updateTimer();
