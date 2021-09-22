export default [
  {
    path: '/apps/books/edit/:id',
    name: 'apps-books-edit',
    component: () => import('@/views/apps/books/books-edit/BooksEdit.vue'),
  },
]
