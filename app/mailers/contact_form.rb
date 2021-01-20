class ContactForm < MailForm::Base
  attributes :name,  :validate => true
  attributes :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attributes :message
  attribute :nickname,  :captcha  => true

  def headers
    {
        :subject => "Contact Form Inquiry",
        :to => "linlu96@yahoo.com",
        :from => %("#{name}" <#{email}>)
    }
  end
end
