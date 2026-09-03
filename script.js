document.addEventListener("DOMContentLoaded", () => {
  // Seleção dos elementos do DOM
  const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
  if (!likeBtn) return;

  const likeSvg = likeBtn.querySelector("svg");
  const postMedia = document.querySelector(".post-media");
  const likesCountSpan = document.querySelector(".likes strong");
  const bookmarkBtn = document.querySelector(".post-actions > .action-btn:last-child");

  // Estado inicial
  let baseLikes = 100;
  let isLiked = false;

  // Função para formatar contadores maiores que 1000
  function formatLikes(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  // Estilização do ícone de curtida
  function applyLikedStyle(liked) {
    if (likeSvg) {
      likeSvg.style.fill = liked ? "#ef4444" : "none";
      likeSvg.style.stroke = liked ? "#ef4444" : "currentColor";
      likeSvg.style.color = liked ? "#ef4444" : "inherit";
    }
  }

  // Função para adicionar curtida e disparar animação
  function addLike() {
    if (!isLiked) {
      baseLikes++;
      isLiked = true;
      likeBtn.classList.add("liked");
      applyLikedStyle(true);

      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }

      // Animação de bounce
      if (likeSvg) {
        likeSvg.style.transform = "scale(1.3)";
        setTimeout(() => {
          likeSvg.style.transform = "scale(1)";
        }, 150);
      }
    }
  }

  // Evento no botão de curtir
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (isLiked) {
      isLiked = false;
      baseLikes = Math.max(0, baseLikes - 1);
      likeBtn.classList.remove("liked");
      applyLikedStyle(false);

      if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
      }
    } else {
      addLike();
    }
  });

  // Evento de clique na imagem
  if (postMedia) {
    postMedia.addEventListener("click", (e) => {
      e.stopPropagation();
      addLike();
    });
  }

  // Evento no botão de salvar
  if (bookmarkBtn) {
    let isBookmarked = false;
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      isBookmarked = !isBookmarked;
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

      const svg = bookmarkBtn.querySelector("svg");
      if (svg) {
        svg.style.transform = "scale(1.2)";
        setTimeout(() => {
          svg.style.transform = "scale(1)";
        }, 150);
      }
    });
  }
});


