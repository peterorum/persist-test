export const profilePagesToShow = ({ customer, currentPage }) => {
  // determine which profile pages need to be shown based
  // on whether they were shown as a popup & not skipped

  let pages = ['/name'];

  if (!customer.popupShown[1] || customer.popupSkipped[1]) {
    pages = [...pages, '/lifestyle2'];
  }

  if (!customer.popupShown[2] || customer.popupSkipped[2]) {
    pages = [...pages, '/preferences'];
  }

  if (!customer.popupShown[3] || customer.popupSkipped[3]) {
    pages = [...pages, '/lifestyle1'];
  }

  // if current page is last one to show, then finish with thanks

  const pageIndex = pages.findIndex(p => p === currentPage);
  const backLink = pages[pageIndex - 1];
  const nextText = pageIndex === pages.length - 1 ? 'Finish' : 'Next';
  const nextLink =
    pageIndex === pages.length - 1 ? '/thanks' : pages[pageIndex + 1];

  const progress = ((pageIndex + 1) / pages.length) * 100;

  return {
    pages,
    pageIndex,
    backLink,
    nextText,
    nextLink,
    progress,
  };
};
