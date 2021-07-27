import { prop } from "@typegoose/typegoose";
// create class Post
class Post {
  @prop()
  public ID?: number;
  @prop()
  public Title?: string;
  @prop()
  public Author?: string;
  @prop()
  public Content?: string;
  @prop()
  public Date?: Date;
}

export default Post;
