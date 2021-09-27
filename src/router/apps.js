export default [
  {
    path: '/apps/books/edit/:id',
    name: 'apps-books-edit',
    component: () => import('@/views/apps/books/books-edit/BooksEdit.vue'),
  },
  {
    path: '/apps/books/create/',
    name: 'apps-books-create',
    component: () => import('@/views/apps/books/books-create/BooksCreate.vue'),
  },
]
