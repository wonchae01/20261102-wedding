// 사진을 누르면 원본 크기로 보여주는 팝업
const photoModal = document.querySelector('#photoModal');
const modalImage = document.querySelector('#modalImage');

document.querySelectorAll('.photo-open').forEach((photo) => {
  photo.addEventListener('click', () => {
    modalImage.src = photo.src;
    modalImage.alt = photo.alt;
    photoModal.showModal();
  });
});

// 팝업 바깥이나 닫기 버튼을 누르면 사진 팝업 닫기
document.querySelector('.modal-close').addEventListener('click', () => photoModal.close());
photoModal.addEventListener('click', (event) => {
  if (event.target === photoModal) photoModal.close();
});

// 계좌번호 복사 후 안내 팝업 표시
const copyModal = document.querySelector('#copyModal');
document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const accountNumber = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(accountNumber);
    } catch (error) {
      // 보안 정책 등으로 클립보드 API를 쓸 수 없을 때를 위한 대체 방식
      const temporaryInput = document.createElement('textarea');
      temporaryInput.value = accountNumber;
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand('copy');
      temporaryInput.remove();
    }
    copyModal.showModal();
  });
});

document.querySelector('.modal-confirm').addEventListener('click', () => copyModal.close());
copyModal.addEventListener('click', (event) => {
  if (event.target === copyModal) copyModal.close();
});
