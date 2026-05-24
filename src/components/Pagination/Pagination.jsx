import "./Pagination.css";

const Pagination = ({ setSearchParams, page, searchParams, totalCount }) => {
  // عدد العناصر بكل صفحة (RAWG default غالباً 20)
  const PAGE_SIZE = 20;

  // حساب عدد الصفحات الكلي
  // + حد أقصى 500 لأن RAWG API ما بيسمح أكثر
  const maxPage = totalCount
    ? Math.min(Math.ceil(totalCount / PAGE_SIZE), 500)
    : 500;

  // إذا ما في صفحات كافية، اعرض زر واحد فقط
  if (maxPage <= 1) {
    return (
      <div className="pagination">
        <button
          className={page === 1 ? "active" : ""}
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set("page", "1");
            setSearchParams(params);
          }}
          aria-label="Go to page 1"
        >
          1
        </button>
      </div>
    );
  }

  return (
    <div className="pagination">
      {/* زر الصفحة الأولى */}
      <button
        className={page === 1 ? "active" : ""}
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.set("page", "1");
          setSearchParams(params);
        }}
        aria-label="Go to page 1"
      >
        1
      </button>

      {/* نقاط عند وجود صفحات كثيرة قبل الحالية */}
      {page > 4 && maxPage > 5 && <span>...</span>}

      {/* توليد الصفحات القريبة من الصفحة الحالية */}
      {Array.from({ length: 5 }, (_, index) => {
        const pageNumber = page - 2 + index;

        // تجاهل الصفحات غير الصالحة (الأولى أو الأخيرة)
        if (pageNumber <= 1 || pageNumber >= maxPage) return null;

        return (
          <button
            key={pageNumber}
            className={page === pageNumber ? "active" : ""}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set("page", pageNumber);
              setSearchParams(params);
            }}
            aria-label={`Go to page ${pageNumber}`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* نقاط بعد الصفحات القريبة */}
      {page < maxPage - 3 && maxPage > 5 && <span>...</span>}

      {/* زر آخر صفحة */}
      <button
        className={page === maxPage ? "active" : ""}
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.set("page", String(maxPage));
          setSearchParams(params);
        }}
        aria-label={`Go to page ${maxPage}`}
      >
        {maxPage}
      </button>
    </div>
  );
};

export default Pagination;
