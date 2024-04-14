import { useRef, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminPostPage({ post }) {
  const reviewTab = useRef();
  const editTab = useRef();

  const [tab, setTab] = useState(reviewTab);

  function changeTab(target) {
    reviewTab.current.className = "tab-teal";
    editTab.current.className = "tab-teal";

    target.current.className = "tab-teal active";

    setTab(target);
  }

  function processingEditPost() {
    //save edit

    //change to review tab
    window.confirm("Lưu thay đổi?") && changeTab(reviewTab);
  }

  const post1 =
    `
                        <?php
namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'gauth_id',
        'gauth_type'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];
}
                        `;

  return (
    <>
      <AdminLayout
        slot={
          <div className="post-page">
            <div className="row">
              <h1>
                <b>Bài viết giới thiệu</b>
              </h1>
              <hr />
              <br />
              <div className="col-md-3">
                <button
                  ref={reviewTab}
                  onClick={() =>
                    window.confirm("Bỏ thay đổi?") && changeTab(reviewTab)
                  }
                  className="tab-teal active"
                >
                  Xem
                </button>
                <br />
                <br />
                <button
                  ref={editTab}
                  onClick={() => changeTab(editTab)}
                  className="tab-teal"
                >
                  Chỉnh sửa
                </button>
              </div>

              <div className="col-md-9">
                <div className="post">
                  {post1}
                  {post1}
                  {post1}
                  {post1}
                </div>

                {tab === editTab && (
                  <button
                    onClick={() => processingEditPost()}
                    className="btn btn-teal mt-4"
                  >
                    <b>Lưu</b>
                  </button>
                )}
              </div>
            </div>
          </div>
        }
      ></AdminLayout>
    </>
  );
}
