require 'toto'

# Rack config
use Rack::Static, :urls => ['/css', '/js', '/images', '/fonts', '/favicon.ico'], :root => 'public'
use Rack::CommonLogger

if ENV['RACK_ENV'] == 'development'
  use Rack::ShowExceptions
end


toto = Toto::Server.new do

  set :title, "Salt Hack City"
  set :author, "O.C. Tanner"
  set :url, "http://salthackcity.com"
  set :date, lambda {|now| now.strftime("%B #{now.day.ordinal} %Y") }
  set :markdown,  :smart                                    
  set :summary, :max => 150, :delim => /~\n/            
  
  set :error, lambda {|code| ERB.new( File.read("templates/pages/error.rhtml")).result }
  
  set :logo, "/images/logo.png"
  
end

run toto


