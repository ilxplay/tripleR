import type { Post, Subds, User, Vote, Comment } from '@prisma/client'

export type ExtendedPost = Post & {
  subds: Subds
  votes: Vote[]
  author: User
  comments: Comment[]
}